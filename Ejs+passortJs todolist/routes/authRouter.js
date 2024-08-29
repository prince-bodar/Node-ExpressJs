const express = require("express");
const app = express()
const router = express.Router();
require("dotenv").config()
// const key = process.env.SECREAT_KEY
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const { registration } = require("../controllers/auth_controller");
const passport = require("passport");
require("../helpers/passport")


router.get("/login",(req,res) => {
    res.render('login');
});

router.get("/register",(req,res) => {
    res.render('register');
});

router.post("/register",registration);

router.post("/login", passport.authenticate('local', {
    successRedirect: "todo-list",
    failureRedirect: "login",  // Redirect back to login on failure
}));


router.get("/todo-list",(req,res) => {
    res.render('todo-list');
});

module.exports= router;



























