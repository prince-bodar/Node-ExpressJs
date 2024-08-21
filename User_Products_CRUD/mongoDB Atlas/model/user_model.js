const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   firstName:{
        type : String,
        reqired:true
   },
   lastName : String,
   email:{ 
       type :String,
       reqired:true,
       unique:true
    },
    password:{
          type:Number    
    },
    age : {
       type : Number
   },
   mobileNo:{
      type:String,
   },
   active:{
       type:Boolean,
       default:false
   }
},{
    versionkey:false,
    timestamp:true
})

module.exports = mongoose.model("users",userSchema)