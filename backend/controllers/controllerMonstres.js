const express = require("express");
const monstresService = require("../services/serviceMonstres.js");

class controllerMonstres {
  async creerMonstre(req, res) {
    try {
      const nouvelleMonstre = await monstresService.creerMonstreService(
        req.body
      );
      res.status(201).send(nouvelleMonstre);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  lireMonstre(req, res) {
    res.send("monstre");
  }
  modifierMonstre(req, res) {
    res.send("monstre a ete modifie");
  }
  supprimerMonstre(req, res) {
    res.send("monstre ete supprime");
  }
}

module.exports = new controllerMonstres();
