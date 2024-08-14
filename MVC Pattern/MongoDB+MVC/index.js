const express = require("express");
const userRouter = require("./routes/user")

const {connectMongoDb} = require("./connection")
const {logReqres} = require("./middlewares/index")

const app = express();
const port = 6060;

//connect
connectMongoDb('mongodb://127.0.0.1:27017/my-app')

// middleware pulgins
app.use(express.urlencoded({ extended: false }));
app.use(logReqres("log.txt"))

// Routes
app.use("/users",userRouter)




app.listen(port, () => console.log(`SERVER STARTED! \n http://localhost:6060`));
