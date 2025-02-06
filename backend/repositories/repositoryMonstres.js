const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");
require("dotenv").config();

class repositoryMonstres {
  constructor() {
    this.pool = mariadb.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
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
      console.log("in repo monstre");
      conn = await this.pool.getConnection();
      let res = await conn.query(
        `DELETE FROM Monstres WHERE id = ? RETURNING *`,
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
        `UPDATE Monstres SET ${sqlString} WHERE id = ? RETURNING *`,
        [id]
      );
      console.log(res);
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
