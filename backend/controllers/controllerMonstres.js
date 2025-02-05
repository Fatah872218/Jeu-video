const express = require("express");
const Service = require("../services/serviceMonstres.js");
class controllerMonstres {
  creerMonstre(req, res) {
    res.send("monstre a ete cre");
  }
  lireMonstre(req, res) {
    res.send("monstre");
  }
  modifierMonstre(req, res) {
    res.send("monstre a ete modifie");
  }

  async supprimerMonstre(req, res) {
    try {
      const deletion = await Service.supprimerMonstre(req.params.id);
    } catch (err) {
      console.log(err);
      res.send("error while deleting monster");
    }
  }
}

module.exports = new controllerMonstres();
