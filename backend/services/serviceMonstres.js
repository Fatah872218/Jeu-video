
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


	async modifierMonstreService(id, attaqueData) {
		try {
			return await repositoryMonstre.modifierMonstre(id, attaqueData);
		} catch (error) {
			throw new Error("Erreur dans le service des Attaques: " + error.message);
		}
	}
}
module.exports = new monstreService();

