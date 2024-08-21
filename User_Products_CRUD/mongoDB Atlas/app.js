require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URI;
const port = process.env.PORT;
const product_router = require("./routes/product_routes")


// Database Connection
mongoose.connect(mongoURL)
        .then(()=>console.log("MongoDB is Connected "))
        .catch((err)=>console.log(err));
app.use(express.json());


app.use("/api/product",product_router);



app.listen(port,()=>console.log("Server Is Started !"));