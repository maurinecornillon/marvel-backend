require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");

const app = express();
app.use(formidable());
const cors = require("cors");
app.use(cors());

/////////////////////////////////////////////

// Import des routes
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

//serveur

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(4000, () => {
  console.log("Server started");
});
