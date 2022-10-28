const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    authorid:{
     type : Number,
     required: true
 
    },
     Name: String, 
     price: Number,
    rating: String,
     
 
 }, { timestamps: true });
 
 
 module.exports = mongoose.model('book', bookSchema)
// String, Number
// Boolean, Object/json, array