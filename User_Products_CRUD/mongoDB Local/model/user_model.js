const mongoose = require("mongoose");

 const userschema = mongoose.Schema({
    firstName:{
         type : String,
         reqired:true
    },
    lastName : String,
    age : {
        type : Number
    },
    email:{ 
        type :String,
        reqired:true
    },
 });

module.exports = mongoose.model("users",userschema);