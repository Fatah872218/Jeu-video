const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

class repoAttaques {
  constructor() {
    console.log(process.env.DB, process.env.HOST);

    this.pool = mariadb.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      connectionLimit: 5,
    });
  }

  async creerAttaque(id, nom, type, degats) {
    let conn = "";
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(
        `INSERT INTO Attaques (id, nom, type, degats) VALUES (?, ?, ?, ?) RETURNING *`,
        [id, nom, type, degats]
      );
      return res;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
      console.log("connection ferme");
    }
  }

  async lireAttaque(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let row = await conn.query(`SELECT * FROM Attaques WHERE id = ?`, [id]);
      return row;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }

  async modifierAttaque(id, changes) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      const sqlString = toSQL(changes);
      console.log(`UPDATE Attaques SET ${sqlString} WHERE id = ${id}`);
      let res = await conn.query(
        `UPDATE Attaques SET ${sqlString} WHERE id = ?`,
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

module.exports = new repoAttaques();
