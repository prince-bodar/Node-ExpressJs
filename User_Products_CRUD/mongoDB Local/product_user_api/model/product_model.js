const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        // reqiured : true,
    },
    categories:{
        type:String,
        // reqiured:true,
    },
    price:{
        type:Number,
        // reqiured:true
    },
    piece:Number,
    discount:String,
    email:{
        type:String,
        required:true,
    },
    active:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('products',productSchema) 