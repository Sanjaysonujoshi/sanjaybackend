const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController = require("../controllers/productController.js")
const commonMW = require("../middlewares/commonMiddlewares")
const orderController= require("../controllers/orderController.js")
// const ordercontroller = require("../controllers/ordercontroller")
// //Can we set the 'next' input parameter in a route handler?
// //What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

router.post("/createuser", commonMW.mid1, userController.createuser)
router.post("/productdetails", productController.productdetails)
router.post("/orderdetails",commonMW.mid1,orderController.createorder)


                                 
module.exports = router;