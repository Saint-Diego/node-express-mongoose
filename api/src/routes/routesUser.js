const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/", userController.create);
router.get('/:id', userController.findOne);

module.exports = router;