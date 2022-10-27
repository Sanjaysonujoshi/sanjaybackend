const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)


router.post("/createbookcollection", bookController.createbookcollection)
router.get("/booklist",bookController.booklist)
router.post("/getbooksinyear",bookController.getbooksinyear)
router.post("/getparticularBooks",bookController.getparticularBooks)
router.get("/getXINRBooks",bookController.getXINRBooks)
router.get("/ getRandomBooks",bookController. getRandomBooks)
module.exports = router;