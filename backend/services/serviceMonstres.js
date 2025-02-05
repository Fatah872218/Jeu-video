const repositoryMonstre = require("../repository/monstres.js");

class monstresService {
  async supprimerMonstre(id) {
    try {
      return await repositoryMonstre.supprimerMonstre(id);
    } catch (err) {
      console.log(err);
      throw new Error("");
    }
  }
}

module.exports = new monstresService();
