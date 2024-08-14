const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 6060;

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
app.get("/users", (req, res) => {
     res.json(users)
});

app.route("/api/users/:id")
  
//GET
  .get((req,res) => {
     console.log(req.myname," you are in the router");
      const id = Number(req.params.id)
      const user = users.find(user => user.id == id)
      return res.json(user)
   })


  //POST
  .post((req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.age )
    {
      return res.status(400).json({"msg":"All fields are require"})
    }
    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "post success", id: users.length });
    });
  })


app.listen(port, () => console.log(`SERVER STARTED! \n http://localhost:6060`));
