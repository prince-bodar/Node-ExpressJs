const User = require("../model/user_model");
const bcrypt = require("bcrypt")




exports.registration = async(req,res) => {
    try {
        let Imagepath ="";
        let user = await User.findOne({email:req.body.email,active:false});
        if(user){
            return res.status(400).json({msg:"user alredy Exist"})
        }
        if(req.file){
            Imagepath = req.file.path.replace(/\\/g,'/');
        }
        let hashpass = await bcrypt.hash(req.body.password,10)
        user = await User.create({...req.body, password:hashpass, profileImage:Imagepath})
        res.status(201).json({user,msg:"user created succesessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"})
    }
}