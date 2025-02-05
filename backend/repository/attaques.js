const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

class repoAttaques {
  constructor() {
    this.pool = mariadb.createPool({
      host: "mydb.com",
      user: "myUser",
      password: "myPassword",
      connectionLimit: 5,
    });
  }

  async creerAtaque(id, nom, type, degats) {
    try {
      let conn = await this.pool.getConnection();
      let res = await conn.query(
        `INSERT INTO Attaques (id, nom, type, degats) VALUES (?, ?, ?, ?)`,
        [id, nom, type, degats]
      );
      return res;
    } catch (err) {
      console.error(err.message);
      throw err;
    } finally {
      if (conn) conn.release();
    }
  }

  async lireAttaque(id) {
    try {
      let conn = await this.pool.getConnection();
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
    try {
      let conn = await this.pool.getConnection();
      const sqlString = toSQL(changes);
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
    try {
      let conn = await this.pool.getConnection();
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

module.exports = repoAttaques;
