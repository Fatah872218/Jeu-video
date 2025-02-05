const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

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
  async lireMonstre(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(`SELECT * FROM monstres WHERE id= (?);`, [id]);
      return res;
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }
}

module.exports = new repoMonstres();
