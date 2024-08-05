const express = require("express")
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


// ROUTES
app.route("/api/users/:id")
  .get((req,res) => {
       const id = Number(req.params.id)
       const user = users.find(user => user.id == id)
       return res.json(user)
    })

  .patch((req,res) => {
     return res.json({status : "pending"})
   })

   .delete((req,res) => {
    return res.json({status : "pending"})
  })



app.listen(port,() => console.log(`SERVER STARTED! \n http://localhost:6060`))