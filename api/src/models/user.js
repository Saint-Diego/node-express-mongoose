const { Schema, model} = require('mongoose');
  
const userSchema = new Schema(
  {  
    name: String,
    lastName: String,
    email: String,
    address: String,
    phone: Number,
  }
);  
 
module.exports = model('User', userSchema); 