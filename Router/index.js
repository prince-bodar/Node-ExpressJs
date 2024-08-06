const express = require("express")
const fs = require("fs")
const users =  require("./MOCK_DATA.json")
const app = express()
const port = 6060


// app.get("/api/users/:id" , (req,res) => {
//     const id = Number(req.params.id)
//     const user = users.find(user => user.id == id)
//     return res.json(user)
//  })

// add plugins for post methode 

app.use(express.urlencoded({extended:false}))

// ROUTES
app.get("/users",(req,res) =>{
   res.json(users);
   res.end();
})
app.route("/api/users:id")
  // .get((req,res) => {
  //     const id = Number(req.params.id)
  //     const user = users.find(user => user.id == id)
  //     return res.json(user)
  //  })
    .post((req,res) => {
      const body = req.body;
      // console.log("BODY",body);
      users.push({id:users.length+1,...body,})
        fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) =>{
          return res.json({status : "post pending",id:users.length})
        })
      // res.end();
    })

  .patch((req,res) => {
     res.json({status : "pending"})
     res.end()
   })

   .delete((req,res) => {
    return res.json({status : "pending"})
  })



app.listen(port,() => console.log(`SERVER STARTED! \n http://localhost:6060`))