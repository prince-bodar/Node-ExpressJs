const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 6666;
const userRoutes = require("./routes/user_Routes")

app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(morgan("dev"));


app.get("/",(req,res) => {
    res.end("<h1> Welcome To the Server </h1>")
})


app.use("/api/user",userRoutes);


app.listen(port,() => { console.log("Server is Started on ",`${port}`)})





