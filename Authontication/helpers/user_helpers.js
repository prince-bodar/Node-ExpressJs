const jwt = require("jsonwebtoken")
const User = require("../model/userModel")


exports.tokenVerify = async(req,res,next) => {
    try {
        let authorization =  req.headers["authorization"];
        if(!authorization) {
            res.json({msg:"Not Authorization"})
        }
        let token =  authorization.split(" ")[1]
        // console.log(token);
        const {userId} = await jwt.verify(token,process.env.JWT_SECREAT)
        if(!userId) return res.status(401).json({msg : "User unAuthorized"});
        let user = await User.findOne({_id:userId,active:false});
        if(!user) return res.status(404).json({msg:"User Not Found"});
         req.user = user
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal Server error"});
    }
}






























