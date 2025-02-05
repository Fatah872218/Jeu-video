const repositoryMonstres = require("../repositories/repositoryMonstres.js");

class monstresService {
  //-------------------creer--------------------
  async creerMonstreService(monstreData) {
    try {
      return await repositoryMonstres.creerMonstre(monstreData);
    } catch (err) {
      console.err(err.message);
    }
  }
}

module.exports = new monstresService();
