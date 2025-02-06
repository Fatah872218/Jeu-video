const personnageRepository = require("../repository/personnage.js");

class personnagesService {
  //---------------------creer-----------------------------
  async creerPersonnageService(personnageData) {
    try {
      return await personnageRepository.creerPersonnage(personnageData);
    } catch (err) {
      console.error(err);
    }
  }
  //--------------------lire by id------------------------
  async lirePersonnageByIdService(id) {
    try {
      return await personnageRepository.lirePersonnageById(id);
    } catch (err) {
      console.error(err);
    }
  }
  //-------------------modifier--------------------------
  async modifierPersonnageService(id, personnageData) {
    try {
      return await personnageRepository.modifierPersonnage(id, personnageData);
    } catch (error) {
      throw new Error(
        "Erreur dans le service des personnages: " + error.message
      );
    }
  }
  //-------------------supprimer-------------------------

  async supprimerPersonnageService(id) {
    try {
      return await personnageRepository.supprimerPersonnage(id);
    } catch (error) {
      throw new Error(
        "Erreur dans le service des personnages: " + error.message
      );
    }
  }
}

module.exports = new personnagesService();
