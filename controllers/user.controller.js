const User = require("/models/UserModel");

exports.register = (req, res) => {
  User.createUser(req.body, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ message: "Usuario registrado correctamente" });
  });
};

exports.login = (req, res) => {
  const { correo, password } = req.body;

  User.getUserByCorreo(correo, (err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    res.json({
      correo: user.correo,
      rol: user.rol,
      nombres: user.nombres,
      apellidos: user.apellidos,
    });
  });
};