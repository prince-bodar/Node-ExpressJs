const express = require("express");
const productRouter = express.Router();
const { addProduct, getAllProduct, getProductById } = require("../controller/product_controller")


productRouter.post("/",addProduct);
productRouter.get("/",getAllProduct);
productRouter.get("/id",getProductById);

module.exports = productRouter;