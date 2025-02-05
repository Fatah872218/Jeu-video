const mariadb = require("mariadb");
const { supprimerMonstre } = require("../services/serviceMonstres");
require("dotenv").config();

class repoMonstres {
  constructor() {
    this.pool = mariadb.createPool({
      host: "localhost",
      user: "userJeuVideo",
      password: "1230",
      database: "jeu_video",
      connectionLimit: 5,
    });
  }

  async supprimerAttaque(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(`DELETE FROM Attaques WHERE id = ?`, [id]);
      return res;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }
}

module.exports = new repoMonstres();
