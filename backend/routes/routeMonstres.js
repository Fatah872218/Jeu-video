const express = require("express");
const router = express.router();

const controllerMonstres = require("../controllers/controllerMonstres.js");

router.get("/:id");

router.post("", controllerMonstres.creerMonstre);

router.put("/:id", controllerMonstres.modifierMonstre);

router.delete("/:id", controllerMonstres.supprimerMonstre);
