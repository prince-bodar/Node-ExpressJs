const express = require("express");
const {addUser, getalluser, getuserbyid, updateUser,deleteUser} = require("../controller/user_controller")
const user_router = express.Router()


