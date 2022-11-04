
const userModel = require("../models/orderModel")

const orderdetails= async function (req, res) {
    let data = req.body
    let savedData= await userModel.create(data)
    res.send({msg:savedData})
}

module.exports.orderdetails=orderdetails






