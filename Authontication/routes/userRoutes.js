const express = require("express");
const user_router = express.Router();
const {registration,login} = require("../controller/userController")


user_router.post("/register",registration)
user_router.post("/login",login)

module.exports=user_router;