
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")



const orderModel = require("../models/orderModel")

// const orderdetails= async function (req, res) {
//     let data = req.body
//     let savedData= await userModel.create(data)
//     res.send({msg:savedData})
// }


const createorder= async function (req, res) {
    const { productId, userId}=req.body

    if(!productId || !userId){
        return res.send({message :"productId and userId is mandatory"})
   }

if(!isValidObjectId(productId)){
    return res.send({message :"product is not a valid object Id"})
}
if(!isValidObjectId(userId)){
    return res.send({message: "userId is not a valid objectId"})
}
 
const userDetails = await userModel.findById(userId)

if(!userDetails){
    return res.send({message:"userId is not present"})
}

const productdetails = await productModel.findById(productId)

if(!productdetails){
    return res.send({message:"product is not present"})
}

 const isFreeappuser = req.isFreeappuser

 if(isFreeappuser){
    const order = await orderModel.create({
        userId:userId,
        productId:productId,
        amount :0,
        isFreeappuser :isFreeappuser,
        date:new Date()
    })
    return res.send({data:order})

 }else{

    if(userDetails.balance < productdetails.price){
        return res.send({message:"you dont have suffiecent balance"})
    }

    const orderDetails = {
        userId:userId,
        productId:productId,
        amount:productdetails.price,
        isFreeappuser:isFreeappuser,
        date :newDate()
    }
    const order = await orderModel.create(orderDetails)
       await userModel.findByIdAndUpdate(userId,{$inc:{balance: -productdetails.price}})

 return res.send({data:order})
 }
}

module.exports.createorder=createorder

// module.exports.orderdetails=orderdetails