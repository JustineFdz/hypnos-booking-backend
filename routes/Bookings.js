const express = require("express");
const router = express.Router();
const { Bookings, Rooms, Hotels } = require("../models");

router.get('/:roomId', async (req, res) => {
  const roomId = req.params.roomId
  const bookings = await Bookings.findAll({ where: { RoomId: roomId} });
  res.json(bookings);
});

router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId
  const booking = await Bookings.findAll({ where: { UserId: userId } });
  const roomId = booking.roomId;
  const room = await Rooms.findByPk(roomId);
  const hotelId = room.HotelId;
  const hotel = await Rooms.findByPk(hotelId);

  // const { name: hotelName } = await Hotels.findByPk(id);
  res.json({ ...booking, roomName: room.title, hotelName: hotel.name });
});

router.post("/hotel/:hotelId/room/:roomId", async (req, res) => {
  const roomId = req.params.roomId
  const hotelId = req.params.hotelId
  const { checkIn, checkOut, userId } = req.body;
  const booking = await Bookings.create({ checkIn, checkOut, RoomId: roomId, UserId: userId });

  
  res.json(booking, roomName, hotelName)

})


module.exports = router;

