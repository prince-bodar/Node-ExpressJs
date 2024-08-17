const express = require("express");
const {addUser, getalluser, getuserbyid, updateUser,deleteUser} = require("../controller/user_controller")
const user_router = express.Router()


user_router.post("/" , addUser)
user_router.get("/",getalluser)
user_router.get("/id",getuserbyid)
user_router.put("/",updateUser)
user_router.delete("/",deleteUser)

module.exports = user_router;