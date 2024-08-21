const User = require("../model/user_model");
const Product = require("../model/product_model");





/*******************************-User Operation-***********************************/

              /****************-Create User-****************/
exports.addUser = async (req, res) => {
  try {
     let user = await User.findOne({email:req.body.email , active:false})
     if(user) return  res.status(400).json({msg : "User alredy exist"});
     user = await User.create({ ...req.body});
    console.log(user);
    res.status(201).json({ msg: "User Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Interval Server error" });
  }
};


/****************-Get All User-****************/
exports.getalluser = async (req, res) => {
  try {
    const users = await User.find({active:false});
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

/****************-User Get By Id-****************/
exports.getuserbyid = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.query.userid,active:false  });
    if (!user) return res.status(404).json("User was not found");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


/****************-User Update-****************/
exports.updateUser = async (req,res) => {
   try {
      let user = await User.findOne({_id:req.query.userId},{active:false})
     if(!user){
       return res.status(404).json({msg:"User Not Found"});
      }
      user = await User.findByIdAndUpdate(req.query.userId,{$set:req.body},{new:true});
      res.status(202).json({user, msg:"User Update successfully...."})
   } catch (error) {
     console.log(error);
     res.status(500).json({msg:"Internal Server Error"})
   }
};

/****************-User Delete-****************/
exports.deleteUser = async(req,res) => {
  try {
    let user = await User.findOne({_id:req.query.userId,active:false});
    if(!user) return res.status(404).json({msg : "User Not Found"})
    user = await User.findByIdAndUpdate(
      user._id,
      {$set:{active:true}},
      {new:true}
    ),
    res.status(200).json({msg:"User Deleted Successfully......"});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:"Internal Server Error"})
  }
}



/*******************************-Product Operation-***********************************/

/*************-Add Product-**************/
exports.addProduct = async(req,res) => {
    try {
        let product = await Product.findOne({
            productName:req.body.productName,
            categories:req.body.categories,
            active:false
        })
        // console.log(product);
        
        if(product) return res.status(400).json({msg:"Product alredy exist"});
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
  
