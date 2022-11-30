const User = require('../models/user');

const userController = {
  create: async (req, res) => {
    const user = new User({
      name: req.body.name, 
      lastName: req.body.lastName, 
      email: req.body.email, 
      address: req.body.address, 
      phone: req.body.phone,
      pets: req.body.pets
    });
    try {
      const createdUser = await user.save();
      res.status(200).json(createdUser);      
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const userFind = await User.findById(id);  
      res.json(userFind);      
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  },
};
 
module.exports = userController;