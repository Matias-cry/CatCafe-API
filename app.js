const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "CatCafe API funcionando correctamente"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto " + PORT);
});