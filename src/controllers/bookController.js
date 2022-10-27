
const bookModel = require("../models/bookModel")
const authorModel= require("../models/authorModel")


const createbook = async function(req,res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.semd({msg:savedData})
}

const createAuthor = async function(req,res){
    let data = req.body 
    let savedData1 = await authorModel.create(data)
    res.send({msg:savedData1})
}


module.exports.createAuthor=createAuthor
module.exports.createbook=createbook