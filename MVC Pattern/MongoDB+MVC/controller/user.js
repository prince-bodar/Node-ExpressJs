const User = require("../models/user")

async function handlegetAlluser (req,res) {
    const allDbuser = await User.find({})
       res.json(allDbuser)
}

async function handleGetUserById(req,res) {
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({msg:"User was not found"})
     return res.json(user)
}

async function handleUpdateUserById(req,res){
  const user = await User.findByIdAndUpdate(req.params.id,{last_name:"bodar"})
    if(!user) return res.status(404).json({msg : "User was not found"})
        res.json({msg : "User Updated successfully"});
}

async function handleDeleteById(req,res) {
    const user = await User.findByIdAndUpdate(req.params.id)
    if(!user) return res.status(404).json({msg : "User is not available"})
        res.json({msg : "User Delete successfully"});
}


async function handleCreateNewUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.age || !body.email ) {
      return res.status(400).json({"msg":"All fields are require"})
    }
    const created = await User.create({
      first_name:body.first_name,
      last_name:body.last_name,
      age:body.age,
      email:body.email
    })
   
    console.log(created);
    return res.status(201).json({msg:"User created succesed",id : created._id})
}


module.exports = {
    handlegetAlluser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteById,
    handleCreateNewUser
}