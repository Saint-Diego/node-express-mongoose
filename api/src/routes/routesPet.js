const { Router } = require("express");
const petController = require("../controllers/petController");

const router = Router();

router.post("/", petController.create);
router.get('/:id', petController.findOne);

module.exports = router;