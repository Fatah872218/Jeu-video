const express = require("express");
const router = express.router();

const controllerMonstres = require("../controllers/controllerMonstres.js");

router.post("", controllerMonstres.creerMonstre);

router.put("/:id", controllerMonstres.modifierMonstre);

router.delete("/:id", controllerMonstres.supprimerMonstre);

router.get("/:id", controllerMonstres.lireMonstre);

module.exports = router;
