const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose")
const app = express();
const port = 6060;

// connect mongodb 
mongoose.connect('mongodb://127.0.0.1:27017/my-app')
.then((console.log("Mongodb Connected")))
.catch((err) => console.log("Mongodb Error"))

// schema
  const userSchema = new mongoose.Schema({
     first_name:{
      type:String,
      required:true
     },
     last_name:{
      type:String,
      required:false
     },
     age:{
       type:Number,
       required:true
     },
     email:{
       type:String,
       required:true,
       unique:true
     }

  })

//model

 const User = mongoose.model('User',userSchema)



app.use(express.urlencoded({ extended: false }));

app.use((req,res,next) =>{
  console.log("middleware 1 is calling");
  req.myname = "prince"
  next();
})

app.use((req,res,next) =>{
  console.log("\n Hello",req.myname ," this is middleware 2 ")
  fs.appendFile("./log.txt",`${Date.now()} : ${req.method} : ${req.path} \n `,(err,data) =>{
    next();
  })

})

// ROUTES
// app.get("/users", (req, res) => {
//      res.json(users)
// });

app.route("/api/users/:id")
  
//GET
  .get((req,res) => {
     console.log(req.myname," you are in the router");
      const id = Number(req.params.id)
      const user = users.find(user => user.id == id)
      return res.json(user)
   })


  //POST
  .post(async (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.age || !body.email )
    {
      return res.status(400).json({"msg":"All fields are require"})
    }
    const created = await User.create({
      first_name:body.first_name,
      last_name:body.last_name,
      age:body.age,
      email:body.email
    })
   
    console.log(created);
    return res.status(201).json({msg:"User created succesed"})
    
  })


app.listen(port, () => console.log(`SERVER STARTED! \n http://localhost:6060`));
