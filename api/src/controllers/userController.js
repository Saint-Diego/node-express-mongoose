const User = require('../models/user');

const userController = {
  create: (req, res) => {
    const { name, lastName, email, address, phone } = req.body;
    try {
      const user = new User({name, lastName, email, address, phone});
      user.save();
      res.status(201).send("Usuario creado correctamente");      
    } catch (error) {
      res.status(400).send(`No se pudo crear el usuario ${name} ${lastName}`);
    }
  },
  findOne: ((req, res) => {
    const { id } = req.params;
    try {
      User.findOne({_id: id}, function(error, user) {  
        res.send(user);  
      });      
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  }),
};
 
module.exports = userController;