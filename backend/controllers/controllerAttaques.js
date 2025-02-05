const express = require("express");
class attaquesController {
  creerAttaques(req, res) {
    res.send("attaque crée");
  }
  lireAttaques(req, res) {
    res.send("message attaque");
  }
  modifierAttaques(req, res) {
    res.send(" attaque modifiée");
  }
  supprimerAttaques(req, res) {
    res.send("attaque supprimée");
  }
}

module.exports = new attaquesController();
