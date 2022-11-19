const Pet = require('../models/pet');

const petController = {
  create: async (req, res) => {
    const pet = new User({
      name: req.body.name, 
      race: req.body.race, 
      genre: req.body.genre, 
      age: req.body.age, 
      weight: req.body.weight
    });
    try {
      const createdPet = await pet.save();
      res.status(200).json(createdPet);      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const petFind = await Pet.findById(id);  
      res.json(petFind);      
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
};

module.exports = petController;