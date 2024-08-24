const express = require("express");
const user_router = express.Router()
const { registration } = require("../controllers/user.controller");
const {upload} = require("../helpers/upload.helpers")

user_router.post("/",upload.single("profileImage"),registration);

module.exports = user_router