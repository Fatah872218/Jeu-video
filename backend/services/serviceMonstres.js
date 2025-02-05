const monstreRepository = require("../repositories/repositoryMonstres.js");

class monstresService {
  //--------------------lire by id------------------------
  async lireMonstreByIdService(id) {
    try {
      return await monstreRepository.lireMonstreById(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new monstresService();
