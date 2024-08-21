const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
    },
    categories:{
        type:String,
        reqiured:true,
    },
    price:{
        type:Number,
    },
    piece:Number,
    email:{
        type:String,
    },
    active:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.mongoose.model("product",productSchema);