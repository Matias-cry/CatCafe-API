const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/catcafe.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      correo TEXT UNIQUE,
      password TEXT,
      dni TEXT,
      nombres TEXT,
      apellidos TEXT,
      rol TEXT
    )
  `);
});

module.exports = db;