const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/create", userController.create);
router.get('/getOne/:id', userController.findOne);

module.exports = router;