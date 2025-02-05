const mariadb = require("mariadb");
const toSQL = require("../utils/tools.js");
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
    let conn;
    try {
      conn = await this.pool.getConnection();
      await conn.query("INSERT INTO personnages VALUES (?,?,?,?,?)", [
        id,
        nom,
        contenu,
        experience,
        niveau,
      ]);
      return true;
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

testRepo = new repoPersonnage();
async function check() {
  try {
    const what = await testRepo.creerPersonnage(49, "l", "m", 654, 4);
    console.log(what);
  } catch (err) {
    console.error(err);
  }
}
check();
// module.exports = new repoPersonnage();
