const Product = require("../model/product_model");

// Add Product
exports.addProduct = async(req,res) => {
    try {
        const product = await Product.create({...req.body})
        console.log(product);
        return res.status(201).json({msg:"Product is Added sucessfully ..."})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

// Get all Products
exports.getAllProduct = async(req,res) => {
    try {
        const products = await Product.find()
        return res.status(200).send(products)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server Error");
    }
}


// Get Product By Id 

exports.getProductById = async(req,res) => {
    
    try {
        const product = await Product.findOne({_id:req.query.id})
        if(!product) return  res.status(404).json("product was not found");
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
}
