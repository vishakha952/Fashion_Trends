const getproductcontroller=require("../controllers/products/getproductcontroller");
const express=require("express");
const router=express.Router();
router.get("/",getproductcontroller );
router.get("/category/:category",getproductcontroller);
router.get("/name/:name",getproductcontroller);
router.get("/subcategory/:subcategory",getproductcontroller);
module.exports=router;