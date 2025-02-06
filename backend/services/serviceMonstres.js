const repositoryMonstre = require("../repositories/repositoryMonstres.js");

class monstresService {
  async supprimerMonstre(id) {
    try {
      return await repositoryMonstre.supprimerMonstre(id);
    } catch (err) {
      console.log(err);
      throw new Error("");
    }
  }

  async creerMonstreService(monstreData) {
    try {
      return await repositoryMonstre.creerMonstre(monstreData);
    } catch (err) {
      console.err(err.message);
    }
  }

  async modifierMonstreService(id, monstreData) {
    try {
      return await repositoryMonstre.modifierMonstre(id, monstreData);
    } catch (error) {
      throw new Error("Erreur dans le service des Monstres: " + error.message);
    }
  }
  async lireMonstreByIdService(id) {
    try {
      return await repositoryMonstre.lireMonstre(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new monstresService();
