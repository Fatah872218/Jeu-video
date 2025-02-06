const express = require("express");
const router = express.router();
const controllerMonstres = require("../controllers/controllerMonstres.js");

router.put("/:id", controllerMonstres.modifierAttaques);

module.exports = router;
