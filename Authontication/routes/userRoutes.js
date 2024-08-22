const express = require("express");
const user_router = express.Router();
const {registration,login, userProfile} = require("../controller/userController");
const { tokenVerify } = require("../helpers/user_helpers");


user_router.post("/register",registration)
user_router.post("/login",login)
user_router.get("/user",tokenVerify,userProfile)

module.exports=user_router;


