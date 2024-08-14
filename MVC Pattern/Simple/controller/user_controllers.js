const users = require("../users.json");
const fs = require("fs")


exports.adduser = (req,res) => {
    const body = req.body;
    users.push({id :  users.length+1,...body});
    console.log(body)
    fs.appendFile("../users.json",JSON.stringify(users),(err,data) => {
         return res.status(201).json({ status :"User Created successfully .... ",id:users.length})
    } ) 
}

exports.alluser = (req,res) =>{
    res.json(users)
}