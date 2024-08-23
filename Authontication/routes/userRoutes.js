const express = require("express");
const user_router = express.Router();
const {registration,login, userProfile, updateUser, deleteUser, changePassword} = require("../controller/userController");
const { tokenVerify } = require("../helpers/user_helpers");


user_router.post("/register",registration)
user_router.post("/login",login)
user_router.get("/user",tokenVerify,userProfile)
user_router.put("/update",tokenVerify,updateUser)
user_router.delete("/delete",tokenVerify,deleteUser)
user_router.put("/changepassword",tokenVerify,changePassword);

module.exports=user_router;


