const express = require("express")
const userRoutes= express()
const {adduser,alluser} = require("../controller/user_controllers")


userRoutes.post("/" , adduser);
userRoutes.get("/",alluser);


module.exports = userRoutes;
