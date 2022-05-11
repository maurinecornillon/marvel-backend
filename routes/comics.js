const express = require("express");
const router = express.Router();
const axios = require("axios");

const apiKey = process.env.API_SECRET;

router.get("/comics", async (req, res) => {
  try {
    let limit = 100;

    let page;
    if (req.query.page < 1) {
      page = 1;
    } else {
      page = req.query.page;
    }

    let title = "";
    if (req.query.title) {
      title = req.query.title;
    }

    let skip = (page - 1) * limit;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?limit=${limit}&page=${page}&skip=${skip}&title=${title}&apiKey=${apiKey}`
    );

    res.status(200).json(response.data);
    // console.log(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    const id = req.params.characterId;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${apiKey}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
