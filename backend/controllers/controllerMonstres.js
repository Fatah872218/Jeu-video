const express = require("express");
class controllerMonstres {
	async modifierMonstre(req, res) {
		const { id } = req.params;
		const MonstreData = req.body;
		try {
			const modifierMonstre = await monstreService.modifierMonstreService(
				id,
				MonstreData
			);
			if (!modifierMonstre) {
				return res.status(404).json({ message: "Monstre non trouvé" });
			}
			res.json(updatedMonstre);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

module.exports = new controllerMonstres();
