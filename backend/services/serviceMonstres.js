const monstreRepository = require("../repository/monstre.js");

class monstreService {
	async modifierMonstreService(id, attaqueData) {
		try {
			return await monstreRepository.modifierMonstre(id, attaqueData);
		} catch (error) {
			throw new Error("Erreur dans le service des Attaques: " + error.message);
		}
	}
}
module.exports = new monstreService();
