const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

class repositoryMonstres {
  constructor() {
    this.pool = mariadb.createPool({
      host: "localhost",
      user: "userJeuVideo",
      password: "1230",
      database: "jeu_video",
      connectionLimit: 5,
    });
  }

  async creerMonstre(id, espece, pointdevie) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(
        `INSERT INTO monstres (id, espece, pointdevie) VALUES (?, ?, ?)`,
        [id, espece, pointdevie]
      );
      return res;
    } catch (err) {
      console.error(err.message);
    } finally {
      if (conn) conn.release();
    }
  }
}

module.exports = repositoryMonstres;
