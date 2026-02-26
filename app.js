const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>🐱CatCafe API🐱</title>
      </head>
      <body>
        <div class="container">
        <h1>☕🐾 Cat Café API</h1>
        <p class="subtitle">
            Servicio web para la gestión de usuarios
        </p>

        <div class="card">
            <h2>📌 Endpoints disponibles</h2>
            <ul>
                <li><strong>POST</strong> /api/users/register</li>
                <li><strong>POST</strong> /api/users/login</li>
                <li><strong>GET</strong> <a href="https://catcafe-api.onrender.com/api/users">/api/users<a></li>
            </ul>
        </div>

        <div class="card">
            <h2>🛠 Tecnologías</h2>
            <p>Node.js · Express · SQLite · Firebase Auth</p>
        </div>

        <footer>
            <p>Proyecto académico – Cibertec</p>
            <p>© 2026 Cat Café</p>
        </footer>
    </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto " + PORT);
});