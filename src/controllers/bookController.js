const book = require("../models/bookModel.js")


const createbook = async function (req,res){
    const {author} = req.body
    if(!author){
        return res.send({msg:"author is required" })
    }

    if(req.body.author!=objectId){
        return res.send({msg:"author is not present"})

    }

    const {publisher} = req.body
    if(!publisher){
        return res.send({msg:"publisher is required" })
    }

    if(req.body.publisher!=objectId){
        return res.send({msg:"publisher is not present"})

    }

 


 const saveddata= await book.create(req.body)

 res.send({msg: saveddata})
}




module.exports.createbook=createbook
