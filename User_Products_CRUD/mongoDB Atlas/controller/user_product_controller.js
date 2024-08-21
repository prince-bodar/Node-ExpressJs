const Product = require("../model/product_model")
const User = require("")
/****************-Add Product-***************/
exports.addProduct = async(req,res) => {
    try {
        let product = await Product.findOne({
            productName:req.body.productName,
            categories:req.body.categories,
            active:false
        })
        if(product) return res.status(404).json({msg:"Product alredy exist"});
        product = await Product.create({...req.body})
        res.status(201).json({msg:"Product is Added sucessfully ..."})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal Server Error"})
    }
};

  /************-Get All Product-************/
exports.getAllProduct = async(req,res) => {
  try {
    const products = await Product.find({active:false})
        return res.status(200).send(products)
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server Error");
  }
};

