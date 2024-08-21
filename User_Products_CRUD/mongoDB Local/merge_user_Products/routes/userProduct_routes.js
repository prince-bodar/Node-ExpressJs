const express = require("express");
const user_Product_router = express.Router()
const productRouter = express.Router();

   /**************************Product Routes***********************/
const {
     addProduct,
     getAllProduct, 
     getProductById,
     updateProduct, 
     deleteproduct } = require("../controller/userProduct_controllers")


user_Product_router.post("/product",addProduct);
user_Product_router.get("/product",getAllProduct);
user_Product_router.get("/product/id",getProductById);
user_Product_router.put("/product",updateProduct);
user_Product_router.delete("/product",deleteproduct);



/***************************User Routes**************************/
const {
    addUser, 
    getalluser, 
    getuserbyid, 
    updateUser,
    deleteUser} = require("../controller/userProduct_controllers")
    
    user_Product_router.post("/user" , addUser)
    user_Product_router.get("/user",getalluser)
    user_Product_router.get("/user/id",getuserbyid)
    user_Product_router.put("/user",updateUser)
    user_Product_router.delete("/user",deleteUser)
    

module.exports = user_Product_router;