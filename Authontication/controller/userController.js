const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// // Registration
// exports.registration = async(req,res)=>{
//     try {
//         let user = await User.findOne({email:req.body.email,active:false})
//         if(user) return res.status(400).json({msg:"User Alredy exists"});
//         let haspass = await bcrypt.hash(req.body.password,10)
//         // console.log(haspass);
//         user = await User.create({...req.body,password:haspass});
//         res.status(201).json({msg:"User Created Successfully......",user});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: "Internal Server error"});
//     }
// }

// simple Login
// exports.login = async(req,res) => {
//     try {
//         let user = await User.findOne({email:req.body.email,active:false});
//         if(user) return res.status(404).json({msg:"User Not Found"});
//         let matchpass = await bcrypt.compare(req.body.password,user.password);
//         if(!matchpass) return res.status(400).json({msg:"Email or Password miss match"});
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg: "Internal Server error"});
//     }
// }




/********************REGESTRATION WITH TOCKEN***********************/
exports.registration = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, active: false })
        if (user) return res.status(400).json({ msg: "User alredy Exists" });
        let haspass = await bcrypt.hash(req.body.password, 10)
        user = await User.create({ ...req.body, password: haspass })
        res.status(201).json({ user, msg: "User registrastion successfuly...." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}

/*************************LOGIN WITH TOCKEN*************************/
exports.login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, active: false })
        if (!user) {
            res.status(404).json({ msg: "User Not Found" });
        }
        let matchpass = await bcrypt.compare(req.body.password, user.password);
        if (!matchpass) return res.status(400).json({ msg: "Email Or Password Miss Macth" });
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECREAT);
        res.status(200).json({ msg: "Login Successfully", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}


exports.userProfile = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        user.save();
        res.status(202).json({ msg: "User Update Successfully.....", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}


exports.deleteUser = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(user._id, { $set: { active: true } }, { new: true })
        res.status(200).json({ msg: "User Deleted succsess", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}


exports.changePassword = async (req, res) => {
    try {
        const { currentpassword, newpassword, confirmpassword } = req.body;
        let user = req.user;
        if (!currentpassword || !newpassword || !confirmpassword) { 
            return res.json({ message: "please fufilled the password"});
        }
        if (newpassword !== confirmpassword) { 
           return res.json({ message: 'confirm password not matched...' });
        }
        let matchpassword = await bcrypt.compare(currentpassword, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'Incorrect currentpassword...' });
        let hashpasssword = await bcrypt.hash(newpassword, 10);
        user = await User.findByIdAndUpdate(
            user._id, 
            { $set: { password: hashpasssword } },
            { new: true }
        );
        res.status(200).json({ message: 'password changed successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};


// exports.changePassword= async(req,res) => {
//     try {
//         const {currentpassword , newpassword , confirmpassword } = req.body
//         let user = req.user;
//         if(!currentpassword || !newpassword || !confirmpassword){
//             return res.json({msg:"Please Full filed the Password"});
//         }
//         if (newpassword !== confirmpassword){
//                 return res.json({msg: "Confirm Password Is Not Match"})
//             }
//         let matchPassword = await bcrypt.compare(currentpassword, user.password);        
//         if(!matchPassword) return res.status(400).json({msg:"currunt Password was wrong"});
//         let hashpasssword = await bcrypt.hash(newpassword,10);
//         user = await User.findByIdAndUpdate(
//             user._id,
//             {$set: {password:hashpasssword}},
//             {new:true}
//         )
//         res.json({msg:"password changed successfully...."})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'internal server error...' });
//     }
// }
