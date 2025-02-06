const express = require("express");
const personnageService = require("../services/servicePersonnages.js");
class personnagesController {
  //---------------------creer--------------------------
  async creerPersonnage(req, res) {
    const nouveauPersonnage = await personnageService.creerPersonnageService(
      req.body
    );
    res.status(201).json(nouveauPersonnage);
    try {
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //-------------------lire---------------------------
  async lirePersonnage(req, res) {
    const { id } = req.params;
    try {
      const personnage = await personnageService.lirePersonnageByIdService(id);
      if (!personnage) {
        return res.status(404).json({ message: "Personnage non trouvé" });
      }
      res.json(personnage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //------------------------modifier----------------
  async modifierPersonnage(req, res) {
    const { id } = req.params;
    const personnageData = req.body;
    try {
      const modifierPersonnage =
        await personnageService.modifierPersonnageService(id, personnageData);
      if (!modifierPersonnage) {
        return res.status(404).json({ message: "Personnage non trouvé" });
      }
      res.json(updatedPersonnage);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  //----------------supprimer------------------------
  async supprimerPersonnage(req, res) {
    const { id } = req.params;
    try {
      const result = await personnageService.supprimerPersonnageService(id);
      if (!result) {
        return res.status(404).json({ message: "Personnage non trouvé" });
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new personnagesController();
