const { Router } = require("express");
const petController = require("../controllers/petController");

const router = Router();

router.post("/create", petController.create);
router.get('/getOne/:id', petController.findOne);

module.exports = router;