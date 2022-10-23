const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}



const createnewbook = async function(req,res){
    let data = req.body
    let savedbook= await UserModel.create(data)
    res.send({msg:savedbook})
}

const getallbooks= async function(req,res){
    let books= req.body=await UserModel.find()
    res.send({msg : books})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createnewbook=createnewbook
module.exports.getallbooks=getallbooks