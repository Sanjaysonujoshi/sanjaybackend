const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController= require("../controllers/publisherController.js")

router.post("/createAuthor", authorController.author)

router.post("/createpublisher",publishController.publisher)

router.post("/createBook", bookController.createbook)

router.get("/getBooksData", bookController.createbook)

module.exports = router;