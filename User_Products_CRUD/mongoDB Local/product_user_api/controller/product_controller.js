const Product = require("../model/product_model");

// Add Product
exports.addProduct = async(req,res) => {
    try {
        let product = await Product.findOne({
            productName:req.body.productName,
            categories:req.body.categories,
            active:false
        })
        // console.log(product);
        
        if(product) return res.status(404).json({msg:"Product alredy exist"});
        product = await Product.create({...req.body})
        // console.log(product);
        res.status(201).json({msg:"Product is Added sucessfully ..."})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

// Get all Products
exports.getAllProduct = async(req,res) => {
    try {
        const products = await Product.find({active:false})
        return res.status(200).send(products)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server Error");
    }
}


// Get Product By Id 
exports.getProductById = async(req,res) => {
    
    try {
        const product = await Product.findOne({_id:req.query.productId,active:false})
        if(!product) return  res.status(404).json("product was not found");
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
}

// Update by id
exports.updateProduct= async(req,res) => {
    try {
        // let product = await Product.findById(req.query.productId)
        let product = await Product.findOne({_id:req.query.productId,active:false})
        if(!product){
            return  res.status(404).json("product was not found");
        }
        product = await Product.findByIdAndUpdate(req.query.productId,{$set:req.body},{new:true});
        product.save();
        return res.status(202).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server error"})
    }
}
// Delete Product
exports.deleteproduct = async(req,res) =>{
    try {    
    //   let  product= await Product.findById(req.query.productId);
    let product = await Product.findOne({_id:req.query.productId,active:false})
    if(!product) {
        res.status(404).json({msg :"Products Not Found"});
    }
    //   product = await Product.findByIdAndDelete(req.query.productId)
    product = await Product.findByIdAndUpdate(
        product._id,
        {$set:{active:true}},
        {new:true}
    )
    res.status(200).json({product,msg :"product Deleted successfully..."});
    } catch (error) {
      console.log(error);
      res.status(500).json({msg :"Internal Server Error"});
    }
  }
  
