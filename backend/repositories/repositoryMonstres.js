const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

class repositoryMonstres {
  constructor() {
    this.pool = mariadb.createPool({
      host: "localhost",
      user: "userJeuVideo",
      password: "1234",
      database: "jeu_video",
      connectionLimit: 5,
    });
  }

  async creerMonstre(monstreData) {
    const { id, espece, pointdevie } = monstreData;
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(
        `INSERT INTO monstres (id, espece, pointdevie) VALUES (?, ?, ?) RETURNING *`,
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

module.exports = new repositoryMonstres();
