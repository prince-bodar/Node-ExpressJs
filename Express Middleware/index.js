const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 6060;

// app.get("/api/users/:id" , (req,res) => {
//     const id = Number(req.params.id)
//     const user = users.find(user => user.id == id)
//     return res.json(user)
//  })

// add plugins for post methode  // this is type of inbuilt middeleware 
app.use(express.urlencoded({ extended: false }));

let middeleware = ((req,res,next) =>{
  console.log("User middleware is calling");
  req.myname = "prince"
  next();
})

// app.use((req,res,next) =>{
//   console.log("middleware 1 is calling");
//   req.myname = "prince"
//   next();
// })

// app.use((req,res,next) =>{
//   console.log("\n Hello",req.myname)
//   fs.appendFile("./log.txt",`${Date.now()} : ${req.method} : ${req.path} \n `,(err,data) =>{
//     next();
//   })

// })

// ROUTES
app.get("/users",middeleware, (req, res) => {
  res.json(users);
  res.end();
});



app .route("/api/users/:id")
  .get((req,res) => {
     console.log(req.myname,"you are in the router");
      const id = Number(req.params.id)
      const user = users.find(user => user.id == id)
      return res.json(user)
   })
  .post((req, res) => {
    const body = req.body;
    // console.log("BODY",body);
    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "post pending", id: users.length });
    });
    // res.end();
  })

  .patch((req, res) => {
    res.json({ status: "pending" });
    res.end();
  })

  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.listen(port, () => console.log(`SERVER STARTED! \n http://localhost:6060`));
