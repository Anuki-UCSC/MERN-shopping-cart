const express=require('express');
const router =express.Router();
const {getAllProducts,getProductsById}=require('../controller/productControllers');

//        GET all products from db
//@route  GET /api/products
router.get('/',getAllProducts)

//        GET a product by id from db
//@route  GET /api/products/:id
router.get('/:id',getProductsById)


module.exports=router;