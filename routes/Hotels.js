const express = require("express");
const router = express.Router();
const {Rooms, Hotels} = require("../models");

router.get("/", async (req, res) => {
  const listOfHotels = await Hotels.findAll();
  res.json(listOfHotels);
});

router.get('/byId/:id', async (req,res) => {
  const id =req.params.id;
  const hotel = await Hotels.findByPk(id);
  res.json(hotel);
});

router.get('/:hotelId/room/:roomId', async (req, res) => {
  const hotelId =req.params.hotelId;
  const roomId =req.params.roomId
  const rooms = await Rooms.findAll({ where: { HotelId: hotelId } });
  const room = rooms.find(room => room.id.toString() === roomId)
  res.json(room);
});


router.post("/", async (req,res) => {
  const hotel = req.body;
  await Hotels.create(hotel);
  res.json(hotel);
});

module.exports = router;

