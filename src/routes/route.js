const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController = require("../controllers/productController.js")


// const ordercontroller = require("../controllers/ordercontroller")
// //Can we set the 'next' input parameter in a route handler?
// //What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

router.post("/createuser",  userController.createuser)
router.post("/productdetails", productController.productdetails)


module.exports = router;