const express = require("express");
const {addProduct, getAllProduct} = require("../controller/product_controller");
const product_router = express.Router()


product_router.post("/",addProduct);
product_router.get("/",getAllProduct);

module.exports = product_router;