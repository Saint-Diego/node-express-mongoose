const Pet = require('../models/pet');

const petController = {
  create: (req, res) => {
    const { name, race, genre, age, weight } = req.body;
    try {
      const pet = new Pet({name, race, genre, age, weight});
      pet.save();
      res.status(201).send("Mascota creada correctamente");      
    } catch (error) {
      res.status(400).send(`No se pudo crear la mascota ${name}`);
    }
  },
  findOne: ((req, res) => {
    const { id } = req.params;
    try {
      User.findOne({_id: id}, function(error, pet) {  
        res.send(pet);  
      });      
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  }),
};

module.exports = petController;