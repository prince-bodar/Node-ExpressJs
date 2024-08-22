const User = require("../model/userModel");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

// // Registration
// exports.registration = async(req,res)=>{
//     try {
//         let user = await User.findOne({email:req.body.email,active:false})
//         if(user) return res.status(400).json({msg:"User Alredy exists"});
//         let haspass = await bycrypt.hash(req.body.password,10)
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
//         let matchpass = await bycrypt.compare(req.body.password,user.password);
//         if(!matchpass) return res.status(400).json({msg:"Email or Password miss match"});
//         res.status(200).json(user);
//     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({msg: "Internal Server error"});
    //     }
    // }
    
    
    
    
    /********************REGESTRATION WITH TOCKEN***********************/
    exports.registration = async(req,res) => {
        try {
            let user = await User.findOne({email:req.body.email,active:false})
            if(user) return res.status(400).json({msg:"User alredy Exists"});
            let haspass = await bycrypt.hash(req.body.password,10)
            user = await User.create({...req.body,password:haspass})
            res.status(201).json({user, msg:"User registrastion successfuly...."})
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Internal Server error"});
    }
}

/*************************LOGIN WITH TOCKEN*************************/
exports.login = async(req,res) =>{
    try {
        let user = await User.findOne({email:req.body.email,active:false})
        if(!user){
            res.status(404).json({msg:"User Not Found"});
        }
        let matchpass = await bycrypt.compare(req.body.password,user.password);
        if(!matchpass) return res.status(400).json({msg:"Email Or Password Miss Macth"});
        let token = await jwt.sign({userId:user._id},process.env.JWT_SECREAT);
        res.status(200).json({msg:"Login Successfully",token});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}


exports.userProfile = async(req,res) => {
     try {
        res.status(200).json(req.user)
     } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
     }
}
