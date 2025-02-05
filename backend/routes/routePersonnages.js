const express = require("express");
const router = express.Router();
const personnagesController = require("../controllers/controllerPersonnages.js");

router.get("/:id", personnagesController.lirePersonnage);
router.post("/", personnagesController.creerPersonnage);
router.put("/:id", personnagesController.modifierPersonnage);
router.delete("/:id", personnagesController.supprimerPersonnage);

module.exports = router;
