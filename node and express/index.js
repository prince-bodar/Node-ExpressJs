const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")
const users =  require("./MOCK_DATA.json")
const app = express()
const port = 6060

// HTML Render
// app.get("/users",(req,res) => {
//     const html = `
//          <ol>
//                ${users.map( user => `<li> ${user.first_name} </li>`).join("")}
//          </ol>
//     `
//     res.send(html)
// })

// app.get("/users",(req,res) => {
//   const html = `
//        <ul>
//              ${users.map( user => `<li>
//                ${user.first_name} 
//                    <ul>
//                       <li>User id is ${user.id}</li>
//                    </ul>
//               </li>`).join("")}
//        </ul>
//   `
//   res.send(html)
// })


// app.get("/",(req,res) => {
//    res.end("This Home page")
//  })


// app.get("/api/users/:id" , (req,res) => {
//     const id = Number(req.params.id)
//     const user = users.find(user => user.id == id)
//     return res.json(user)
//  })

// app.get("/api/users" , (req,res) => {
//    return res.json(users)
// })

// app.post("/api/users" , (req,res) => {
//    // create user
//    return res.json({status : "pending"})
// })

// app.patch("/api/users:id" , (req,res) => {
//    // edit user
//    return res.json({status : "pending"})
// })

// app.delete("/api/users:id" , (req,res) => {
//    // delete user 
//    return res.json({status : "pending"})
// })


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