const express = require("express");
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
  supprimerMonstre(req, res) {
    res.send("monstre ete supprime");
  }
}
