const express=require("express")
const product_controller=require("../controllers/product")
const product_router=express.Router()

product_router.get("/products",product_controller.get_all_products)
product_router.get("/products/:id",product_controller.get_product)


module.exports=product_router