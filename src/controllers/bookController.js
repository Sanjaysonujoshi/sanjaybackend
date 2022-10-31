const  authorModel = require("../models/authorModel.js")
// const mongoose = require("mongoose")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")



let createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author_id
    let publisherId = book.publisher
    const arrId = await authorModel.find().select({ _id: 1 })
    const arrPublisher = await publisherModel.find().select({ _id: 1 })

    let a = false
    let b = false
// check the condition is valid Id or notz
    arrId.forEach(element => {
        let authorID2 = element._id
        if (authorID2 == authorId) {
            a = true
            arrPublisher.forEach(element2 => {
                let publisherId2 = element2._id
                if (publisherId == publisherId2) {
                    b = true

                }
            });

        }
    });
    // when wrong id got send messege acording the invalid
    if (!a) {
        res.send("author id is not valid")
    }
    if (!b) res.send("publisher id is not valid")
    let bookCreated = await bookModel.create(book)
    res.send(bookCreated)
}
// get all the book from the database with publisher info and author
const getBooksData = async function (req, res) {
    const allBook = await bookModel.find().populate(['NewAuthor', 'Newpublisher'])
    res.send(allBook)
}
// update the value true of isHardCover 
const updateValue = async function (req, res) {
    // getting id from newPublisher databse 
    const data = await publisherModel.find({"name":["Penguin","HarperCollins"]}).select({_id:1})
    const update=await bookModel.updateMany({publisher:data},{isHardCover:true},{new:true})
    res.send(update);
}
// increse the price of book by 10 in range of condtion
const updatePrice = async function (req, res) {
    const data = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    const update=await bookModel.updateMany({author_id:data},{$inc:{price:+10}},{new:true})

    res.send(update);
}

// const savebook = async function (req,res){
//     const  save= await book.
// }

module.exports.createBook=createBook
module.exports.getBooksData=getBooksData
module.exports.updateValue=updateValue
module.exports.updatePrice=updatePrice