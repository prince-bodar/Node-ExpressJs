const express = require("express");
const productRouter = express.Router();
const {
     addProduct,
     getAllProduct, 
     getProductById,
     updateProduct, 
     deleteproduct } = require("../controller/product_controller")


productRouter.post("/",addProduct);
productRouter.get("/",getAllProduct);
productRouter.get("/id",getProductById);
productRouter.put("/",updateProduct);
productRouter.delete("/",deleteproduct);

module.exports = productRouter;