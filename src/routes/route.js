const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publisherController.js")

router.post("/createAuthor", authorController.author)

router.post("/createpublisher",publishController.publisher)

router.post("/createBook", bookController.createBook)

router.put("/updateValue", bookController.updateValue)


router.put("/updatePrice",bookController.updatePrice)




// router.put("/books",books.books)

module.exports = router;