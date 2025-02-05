const mariadb = require("mariadb");
require("dotenv").config();

class repoPersonnage {
  constructor() {
    this.pool = mariadb.createPool({
      host: process.env.HOST,
      database: process.env.DB,
      user: process.env.USER,
      password: process.env.PASSWORD,
    });
  }

  async creerPersonnage(id, nom, contenu, experience, niveau) {
    try {
      let conn = this.pool.getConnection();
      let res = conn.query("INSERT INTO personnages VALUES (?,?,?,?,?)", [
        id,
        nom,
        contenu,
        experience,
        niveau,
      ]);
    } catch (err) {
      console.error(err);
      throw new Error("");
    } finally {
      if ()
    }
  }
  async lirePersonnage(id) {
    try {
      let conn = this.pool.getConnection(
        `SELECT * FROM personnages WHERE id=${id}`
      );
      conn.query();
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }

  async modifierPersonnage(id, changes) {
    try {
      let conn = this.pool.getConnection(
        `UPDATE personnages SET ${toSQL(changes)} WHERE id=${id};`
      );
      conn.query();
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }

  async supprimerPersonnage(id) {
    try {
      let conn = this.pool.getConnection();
      conn.query(`DELETE FROM personnages WHERE id=${id};`);
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }
}

module.exports = new repoPersonnage();
