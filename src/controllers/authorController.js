const author = require("../models/authorModel.js")


const createauthor = async function (req,res){
    const authorone = req.body
 const saveddata= await author.create(authorone)

 res.send({msg: saveddata})
}



module.exports.author=createauthor