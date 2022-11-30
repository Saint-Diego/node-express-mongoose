const { Schema, model} = require('mongoose');
  
const petSchema = new Schema(
  {  
    name: {
      required: true,
      type: String,
    },
    race: {
      required: true,
      type: String,
    },
    genre: {
      required: true,
      type: String,
    },
    age: {
      required: true,
      type: Number,
    },
    weight: Number,
  }
);  
 
module.exports = model('Pet', petSchema); 