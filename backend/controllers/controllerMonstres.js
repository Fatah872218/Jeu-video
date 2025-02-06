const express = require("express");
const monstresService = require("../services/serviceMonstres.js");

class monstresController {
  async creerMonstre(req, res) {
    try {
      const nouvelleMonstre = await monstresService.creerMonstreService(
        req.body
      );
      res.status(201).json(nouvelleMonstre);
    } catch (err) {
      console.log();
      res.status(500).json({ message: err.message });
    }
  }
  //-------------------lire---------------------------
  async lireMonstre(req, res) {
    const { id } = req.params;
    try {
      const monstre = await monstreService.lireMonstreByIdService(id);
      if (!monstre) {
        return res.status(404).json({ message: "Monstre non trouvé" });
      }
      res.json(monstre);
    } catch (err) {
      console.error(err);
    }
  }

  async supprimerMonstre(req, res) {
    try {
      const deletion = await monstresService.supprimerMonstre(req.params.id);
    } catch (err) {
      console.log(err);
      res.send("error while deleting monster");
    }
  }

  async modifierMonstre(req, res) {
    const { id } = req.params;
    const MonstreData = req.body;
    try {
      const modifierMonstre = await monstresService.modifierMonstreService(
        id,
        MonstreData
      );
      if (!modifierMonstre) {
        return res.status(404).json({ message: "Monstre non trouvé" });
      }
      res.json(updatedMonstre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new monstresController();
