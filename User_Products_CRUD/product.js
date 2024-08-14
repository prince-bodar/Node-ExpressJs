const express = require("express");
const app = express();
const port = 6666;
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routes/product_route")

// Database 
mongoose.connect("mongodb://127.0.0.1:27017/node8to10")
        .then(() => { console.log("MongoDB is Connected !")})
        .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use("/api/product",productRouter)




app.listen(port,() => {console.log("Server is Started !");})