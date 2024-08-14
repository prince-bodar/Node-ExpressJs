const express = require("express");
const {addUser, getalluser, getuserbyid} = require("../controller/user_controller")
const user_router = express.Router()


user_router.post("/" , addUser)
user_router.get("/",getalluser)
user_router.get("/id",getuserbyid)

module.exports = user_router;