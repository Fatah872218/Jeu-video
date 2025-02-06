const express = require("express");
const router = express.router();
const controllerMonstres = require("../controllers/controllerMonstres.js");

router.delete("/:id", controllerMonstres.supprimerMonstre);
router.put("/:id", controllerMonstres.modifierMonstre);
