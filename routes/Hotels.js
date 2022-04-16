const express = require("express");
const router = express.Router();
const {Hotels} = require("../models");

router.get("/", async (req, res) => {
  const listOfHotels = await Hotels.findAll();
  res.json(listOfHotels);
});

router.get('/byId/:id', async (req,res) => {
  const id =req.params.id;
  const hotel = await Hotels.findByPk(id);
  res.json(hotel);
});

router.post("/", async (req,res) => {
  const hotel = req.body;
  await Hotels.create(hotel);
  res.json(hotel);
});

module.exports = router;

