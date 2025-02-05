const express = require("express");
const router = express.Router();
const attaquesController = require("../controllers/controllerAttaques.js");

router.get("/:id", attaquesController.lireAttaques);
router.post("/", attaquesController.creerAttaques);
router.put("/:id", attaquesController.modifierAttaques);
router.delete("/:id", attaquesController.supprimerAttaques);

module.exports = router;
