const { Schema, model} = require('mongoose');
  
const userSchema = new Schema(
  {  
    name: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    email: String,
    phone: {
      required: true,
      type: Number,
    },
    pets: [{
      id: { type: Schema.ObjectId, ref: 'Pet' }
    }],
  }
);  
 
module.exports = model('User', userSchema); 