
const userModel = require("../models/productModel")

const productdetails= async function (req, res) {
    let data = req.body
    let savedData= await userModel.create(data)
    res.send({msg:savedData})
}

module.exports.productdetails=productdetails
