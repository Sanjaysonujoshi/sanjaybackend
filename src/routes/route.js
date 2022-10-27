const express = require('express');
const router = express.Router();

const bookModel = require("../models/bookModel")
const authorModel= require("../models/authorModel")

const bookController=require("../controllers/bookcontrollers.js")


router.post("/createbook",bookController.createbook)

router.post("/createAuthor",bookController.createAuthor)


router.post("/findbook",async function (req,res){
    const savedData2 = await authorModel.findOne({author_name: "chetan Bhagat"})
    const authorId = savedData2.author_id
   const savedData3 = await bookModel.find({author_id: authorId}).select ({name: 1, _id:0})
   res.send({msg : savedData3})
})


router.post("/findauthor", async function (req,res){
    const savedData4 = await bookModel.findOneAndUpdate({ name :"Two states"},{$set :{price :100}},{new: true})
    const authorid1 = savedData4.author_id
    const savedData5 = await authorModel.findOne({author_id: authorId1 }).select({author_name : 1, _id:0})
    res.send({msg: savedData5})
})

module.exports = router;
