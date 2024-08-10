const express = require("express")
const urlroute = require("./routes/url")
const URL = require("./models/url")
const app = express()
const port = 6666
const {connectToMongoDB} = require("./connections")

connectToMongoDB("mongodb://127.0.0.1:27017/short-Url")
.then(() => console.log("MongoDB Connected"))

app.use(express.json())
app.use("/url",urlroute)

app.use("/:shortId" ,async (req,res) => {
    const shortId = req.params.shortId
   const entry = await URL.findOneAndUpdate(
    {
        shortId
    },
    {
        $push : {visitHistory:{timestamp : Date.now()}}
    })
    res.redirect(entry.redirectUrl)
})

app.listen(port,() => {console.log(`Server Started on port : ${port}`)})
