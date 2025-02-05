const express = require("express");
class personnagesController {
  creerPersonnage(req, res) {
    res.send(" personnage ajouté");
  }
  lirePersonnage(req, res) {
    res.send("message personnage");
  }
  modifierPersonnage(req, res) {
    res.send(" personage modifié");
  }
  supprimerPersonnage(req, res) {
    res.send("personnage supprimé");
  }
}

module.exports = new personnagesController();
