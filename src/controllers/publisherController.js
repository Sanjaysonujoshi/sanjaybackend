const publisher = require("../models/publisherModel.js")


const createpublisher = async function (req,res){
    const book = req.body
 const saveddata= await publisher.create(book)

 res.send({msg: saveddata})
}



module.exports.publisher=createpublisher