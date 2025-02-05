const express = require("express");
const monstresService = require("../services/serviceMonstres.js");
class monstresController {
  //-------------------lire---------------------------
  async lireMonstre(req, res) {
    const { id } = req.params;
    try {
      const monstre = await monstreService.lireMonstreByIdService(id);
      if (!monstre) {
        return res.status(404).json({ message: "Monstre non trouvé" });
      }
      res.json(monstre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new monstresController();
