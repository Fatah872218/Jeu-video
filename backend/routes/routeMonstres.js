const express = require("express");
const router = express.router();
const monstresController = require("../controllers/controllerMonstres.js");

router.get("/:id");

router.post("", monstresController.creerMonstre);

router.put("/:id");

router.delete("/:id");
