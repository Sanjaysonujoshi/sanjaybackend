const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
   userid : Number,
    productid: String,
    amount: Number,
    isfreeAppUser: Boolean

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
