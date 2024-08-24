require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const mongoURL = process.env.MONGO_URI
const port = process.env.PORT
const userrouter = require("./routes/user.route");
// Database connection  
mongoose.connect(mongoURL)
        .then(()=> console.log("MongoDB is Connected"))
        .catch((err) => console.log(err))


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('public/images',express.static(path.join(__dirname,'public/images')));

app.use("/api/user",userrouter)

app.listen(port,() => {
    console.log(`Server Is Started ! ${port}`);
})
