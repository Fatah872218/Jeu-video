const express = require("express");
const router = express.Router();
const monstresController = require("../controllers/controllerMonstres.js");

router.get("/:id", monstresController.lireMonstre);

module.exports = router;
