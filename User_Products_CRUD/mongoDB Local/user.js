const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose")
const port = 6666;
const router = require("./routes/user_route")

// Database Connections
 mongoose.connect(url)
       .then(() => console.log("MongoDB is  connected"))
       .catch((err) => console.log(err));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


app.use("/api/user",router);



app.listen(port,() => {
    console.log("Server Is Started on ",`${port}`);
})