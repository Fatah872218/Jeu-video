const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");

class repoPersonnage {
  constructor() {
    this.pool = mariadb.createPool({
      host: process.env.HOST,
      database: process.env.DB,
      user: process.env.USER,
      password: process.env.PASSWORD,
    });
  }

  async creerPersonnage(personnageData) {
    const { id, nom, contenu, experience, niveau } = personnageData;
    let conn;
    try {
      console.log("creation de personnage");
      conn = await this.pool.getConnection();
      let res = await conn.query(
        "INSERT INTO personnages VALUES (?,?,?,?,?) RETURNING *",
        [id, nom, contenu, experience, niveau]
      );
      return res;
    } catch (err) {
      console.error(err);
      throw new Error("");
    } finally {
      if (conn) conn.release();
    }
  }
  async lirePersonnage(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      let res = await conn.query(`SELECT * FROM personnages WHERE id= (?);`, [
        id,
      ]);
      return res;
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }

  async modifierPersonnage(id, changes) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      await conn.query(
        `UPDATE personnages SET ${toSQL(changes)} WHERE id= (?);`,
        [id]
      );
      return true;
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }

  async supprimerPersonnage(id) {
    let conn;
    try {
      conn = await this.pool.getConnection();
      await conn.query(`DELETE FROM personnages WHERE id= (?) ;`, [id]);
      return true;
    } catch (err) {
      console.error(err);
      throw new Error("");
    }
  }
}

module.exports = new repoPersonnage();
