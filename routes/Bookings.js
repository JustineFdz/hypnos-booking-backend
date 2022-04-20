const express = require("express");
const router = express.Router();
const { Bookings } = require("../models");

router.get('/:roomId', async (req, res) => {
  const roomId =req.params.roomId
  const bookings = await Bookings.findAll({ where: { RoomId: roomId} });
  res.json(bookings);
});

router.post("/", async(req,res) => {
  const booking = req.body;
  await Bookings.create(booking);
  res.json(booking)

})




module.exports = router;

