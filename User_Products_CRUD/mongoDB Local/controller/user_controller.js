const User = require("../model/user_model");



// Create User
exports.addUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body});
    console.log(user);
    res.status(201).json({ msg: "User Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Interval Server error" });
  }
};


// Get All User
exports.getalluser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Get User By Id
exports.getuserbyid = async (req, res) => {
  try {
    // const user = await User.findOne({ _id: req.query.userid });
    const user = await User.findById(req.query.userid);
    if (!user) return res.status(404).json("User was not found");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


// update user 
exports.updateUser = async (req,res) => {
   try {
      let user = await User.findById(req.query.userId)
     if(!user){
       return res.status(404).json({msg:"User Not Found"});
      }
      user = await User.findByIdAndUpdate(req.query.userId,{$set:req.body},{new:true});
      res.status(202).json({user, msg:"User Update successfully...."})
   } catch (error) {
     console.log(error);
     res.status(500).json({msg:"Internal Server Error"})
   }
};

  
// Delete User
exports.deleteUser = async(req,res) =>{
  try {    
    let user = await User.findById(req.query.userId);
    console.log("Delete");
    
    if(!user) {
      res.status(404).json({msg :"User Not Found"});
    }
     user = await User.findByIdAndDelete(req.query.userId)
    res.status(202).json({user,msg :"User Deleted successfully..."});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg :"user Deleted successfully"});
  }
}
