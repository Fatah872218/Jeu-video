const express = require("express");
const monstresService = require("../services/serviceMonstres.js");

class controllerMonstres {
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
}

module.exports = new controllerMonstres();
