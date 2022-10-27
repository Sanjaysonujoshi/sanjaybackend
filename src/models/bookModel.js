// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


const mongoose = require('mongoose');
const bookSchema= new mongoose.Schema({
    bookname: {
        type: String,
        required : true
    },
    price:{ 
        indianPrice: String,
        europePrice: String,

    },
    tags:[String],
    authorName: String,
    totalPages:Number,
    stockAvailable: Boolean,
   year: {type: Number, default: 2021}
},
   { timestamps: true });





module.exports = mongoose.model('book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
