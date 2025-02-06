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
  async supprimerMonstre(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(`DELETE FROM Monstres WHERE id = ?`, [id]);
      return res;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }

  async modifierMonstre(id, changes) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      const sqlString = toSQL(changes);
      console.log(`UPDATE Monstres SET ${sqlString} WHERE id = ${id}`);
      let res = await conn.query(
        `UPDATE Monstres SET ${sqlString} WHERE id = ?`,
        [id]
      );
      return res;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }
}

module.exports = repositoryMonstres;
