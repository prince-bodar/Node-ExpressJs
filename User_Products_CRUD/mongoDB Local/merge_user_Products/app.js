const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose")
const port = 6666;
const userProduct_router = require("./routes/userProduct_routes")

// Database Connections
 mongoose.connect('mongodb://127.0.0.1:27017/node8to10')
       .then(() => console.log("MongoDB is  connected"))
       .catch((err) => console.log(err));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


app.use("/api", userProduct_router)


app.listen(port,() => {
    console.log("Server Is Started on ",`${port}`);
})