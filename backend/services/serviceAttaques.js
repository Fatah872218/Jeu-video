const attaqueRepository = require("../repositories/repositoryAttaques.js");

class attaquesService {
	//---------------------creer-----------------------------
	async creerAttaqueService(attaqueData) {
		try {
			return await attaqueRepository.creerAttaque(attaqueData);
		} catch (err) {
			console.error(err);
		}
	}
	//--------------------lire by id------------------------
	async lireAttaqueByIdService(id) {
		try {
			return await attaqueRepository.lireAttaqueById(id);
		} catch (err) {
			console.error(err);
		}
	}
	//-------------------modifier--------------------------
	async modifierAttaqueService(id, attaqueData) {
		try {
			return await attaqueRepository.modifierAttaque(id, attaqueData);
		} catch (error) {
			throw new Error("Erreur dans le service des Attaques: " + error.message);
		}
	}
	//-------------------supprimer-------------------------

	async supprimerAttaqueService(id) {
		try {
			return await attaqueRepository.supprimerAttaque(id);
		} catch (error) {
			throw new Error("Erreur dans le service des Attaques: " + error.message);
		}
	}
}

module.exports = new attaquesService();
