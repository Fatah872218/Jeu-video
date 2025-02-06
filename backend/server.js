const express = require("express");
require("dotenv").config();
const routerPersonnages = require("./routes/routePersonnages.js");
const routerAttaques = require("./routes/routeAttaques.js");
const routerMonstres = require("./routes/routeMonstres.js");
const app = express();
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());
app.use("/personnages", routerPersonnages);
app.use("/attaques", routerAttaques);
app.use("/monstres", routerMonstres);
//execution de server:
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
