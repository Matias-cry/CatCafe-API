const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", require("/routes/user.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto " + PORT);
});