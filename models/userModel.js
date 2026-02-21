const db = require("../database/db");

const createUser = (user, callback) => {
  const sql = `
    INSERT INTO users (correo, password, dni, nombres, apellidos, rol)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.run(
    sql,
    [user.correo, user.password, user.dni, user.nombres, user.apellidos, user.rol],
    callback
  );
};

const getUserByCorreo = (correo, callback) => {
  const sql = `SELECT * FROM users WHERE correo = ?`;
  db.get(sql, [correo], callback);
};

module.exports = {
  createUser,
  getUserByCorreo,
};

const getAllUsers = (callback) => {
  const sql = `
    SELECT id, correo, dni, nombres, apellidos, rol
    FROM users
  `;
  db.all(sql, [], callback);
};

module.exports = {
  createUser,
  getUserByCorreo,
  getAllUsers
};