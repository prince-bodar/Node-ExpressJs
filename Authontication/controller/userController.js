const User = require("../model/userModel");
const bycrypt = require("bcrypt");


// Registration
exports.registration = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email,active:false})
        if(user) return res.status(400).json({msg:"User Alredy exists"});
        let haspass = await bycrypt.hash(req.body.password,10)
        // console.log(haspass);
        user = await User.create({...req.body,password:haspass});
        res.status(201).json({msg:"User Created Successfully......",user});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}

// Login
exports.login = async(req,res) => {
    try {
        let user = await User.findOne({email:req.body.email,active:false});
        if(!user) return res.status(404).json({msg:"User Not Found"});
        let matchpass = await bycrypt.compare(req.body.password,user.password);
        if(!matchpass) return res.status(400).json({msg:"Email or Password miss match"});
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}