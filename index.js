require("dotenv").config();

const express = require("express");
const formidable = require("express-formidable");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(formidable());
const cors = require("cors");
app.use(cors());

/////////////////////////////////////////////

// Import des routes
const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);
const userRoutes = require("./routes/users");
app.use(userRoutes);

//serveur

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
