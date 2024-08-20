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
        reqired:true,
        unique:true
    },
    active:{
        type:Boolean,
        default:false
    }
 });



module.exports = mongoose.model("users",userschema);

// let usermodel =  mongoose.model("users",userschema);
// let productmodel = mongoose.model('products',productSchema);
// module.exports = { 
//     usermodel,
//     productmodel
// }