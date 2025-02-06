const express = require("express");
const router = express.Router();
const attaquesController = require("../controllers/controllerAttaques.js");

router.get("/:id", attaquesController.lireAttaque);
router.post("/", attaquesController.creerAttaque);
router.put("/:id", attaquesController.modifierAttaque);
router.delete("/:id", attaquesController.supprimerAttaque);

module.exports = router;
