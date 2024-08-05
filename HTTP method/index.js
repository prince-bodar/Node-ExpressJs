const express = require("express")
const app = express()


app.get('/',(req,res) => {
  res.end(`<h1>This is Home Page</h1>`)
})

app.get('/signup',(req,res) => {
  res.end(`<h1>This is Sign up Page your name is ${req.query.name} and id is ${req.query.id}</h1>`)
})

app.get('/about',(req,res) => {
  res.end("<h1>This is About Page</h1>")
})

app.listen(9090, () => {
  console.log("your server is starte d on port http://localhost:9090");
});
