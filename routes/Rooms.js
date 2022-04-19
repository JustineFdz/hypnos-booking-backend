const express = require("express");
const router = express.Router();
const { Rooms } = require("../models");


router.get('/:hotelId', async (req,res) => {
  const hotelId =req.params.hotelId;
  const rooms = await Rooms.findAll({where : {HotelId : hotelId}});
  res.json(rooms);
});

router.post ("/", async (req,res) => {
  const room = req.body;
  await Rooms.create(room);
  res.json(room);
});


module.exports = router;

