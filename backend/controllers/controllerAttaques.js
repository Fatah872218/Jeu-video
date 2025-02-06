const express = require("express");
const attaqueService = require("../services/serviceAttaques.js");
class attaquesController {
  //---------------------creer--------------------------
  async creerAttaque(req, res) {
    const nouveauAttaque = await attaqueService.creerAttaqueService(req.body);
    res.status(201).json(nouveauAttaque);
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //-------------------lire---------------------------
  async lireAttaque(req, res) {
    const { id } = req.params;
    try {
      const attaque = await attaqueService.lireAttaqueByIdService(id);
      if (!attaque) {
        return res.status(404).json({ message: "Attaque non trouvé" });
      }
      res.json(attaque);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //------------------------modifier----------------
  async modifierAttaque(req, res) {
    const { id } = req.params;
    const attaqueData = req.body;
    try {
      const modifierAttaque = await attaqueService.modifierAttaqueService(
        id,
        attaqueData
      );
      if (!modifierAttaque) {
        return res.status(404).json({ message: "Attaque non trouvé" });
      }
      res.json(updatedAttaque);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //----------------supprimer------------------------
  async supprimerAttaque(req, res) {
    const { id } = req.params;
    try {
      const result = await attaqueService.supprimerAttaqueService(id);
      if (!result) {
        return res.status(404).json({ message: "Attaque non trouvé" });
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new attaquesController();
