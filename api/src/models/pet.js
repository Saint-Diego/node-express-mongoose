const { Schema, model} = require('mongoose');
  
const petSchema = new Schema(
  {  
    name: String,
    race: String,
    genre: String,
    age: Number,
    weight: Number,
  }
);  
 
module.exports = model('Pet', petSchema); 