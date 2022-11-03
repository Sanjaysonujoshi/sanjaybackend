const mongoose = require('mongoose');



const userSchema = new mongoose.Schema( {
    Name: String,
    
    balance: {
        type: String,
        default: 100,
        
    },
    age:String,
    address: String,
        gender:{
            type:String, 
        enum: ["male", "female", "other"] 
    },
   
    isFreeappuser: {
        type: String,
        default: false,
         
    },


}, { timestamps: true });

module.exports = mongoose.model('user', userSchema) 