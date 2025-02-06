const attaquesRepository = require("../repositories/repositoryAttaques.js");

class attaquesService {
  //---------------------creer-----------------------------
  async creerAttaqueService(attaqueData) {
    try {
      return await attaquesRepository.creerAttaque(attaqueData);
    } catch (err) {
      console.error(err);
    }
  }
  //--------------------lire by id------------------------
  async lireAttaqueByIdService(id) {
    try {
      return await attaquesRepository.lireAttaqueById(id);
    } catch (err) {
      console.error(err);
    }
  }
  //-------------------modifier--------------------------
  async modifierAttaqueService(id, attaqueData) {
    try {
      return await attaquesRepository.modifierAttaque(id, attaqueData);
    } catch (error) {
      throw new Error("Erreur dans le service des Attaques: " + error.message);
    }
  }
  //-------------------supprimer-------------------------

  async supprimerAttaqueService(id) {
    try {
      return await attaquesRepository.supprimerAttaque(id);
    } catch (error) {
      throw new Error("Erreur dans le service des Attaques: " + error.message);
    }
  }
}

module.exports = new attaquesService();
