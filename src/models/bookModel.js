const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
		
	name:String,
		author: {
            type: objectId,
            required: true,
            ref: "newAuthor"
        },
	price: Number,
		ratings: Number,
		publisher: {
            type: objectId,
            required: true,
            ref:"newPublisher"
        }





}, { timestamps: true });


module.exports = mongoose.model('newbook', bookSchema)
