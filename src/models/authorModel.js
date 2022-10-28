const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
   authorid:{
    type : Number,
    required: true

   },
    authorName: String, 
    age:Number,
    address: String,
    

}, { timestamps: true });


module.exports = mongoose.model('Book', authorSchema) //users
