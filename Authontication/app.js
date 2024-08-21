const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose");
const mongo_URL = process.env.MONGO_URI
const port = process.env.PORT
const user_router = require("./routes/userRoutes")


// Database Connection 
mongoose.connect(mongo_URL)
        .then(()=>console.log("MongoDB is Connected"))
        .catch((err)=>console.log(err))


app.use(express.json())
app.use(express.urlencoded({extended:true}));


// router
app.use("/api",user_router);


app.listen(port,() => console.log(`Server is Started ${port} !`));