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
  const bookings = await Bookings.findAll({ where: { UserId: userId } });
  res.json(bookings);
});

router.post("/hotel/:hotelId/room/:roomId", async (req, res) => {
  const roomId = req.params.roomId
  const hotelId = req.params.hotelId
  const { checkIn, checkOut,  userId } = req.body;
  const booking = await Bookings.create({ checkIn, checkOut, HotelId : hotelId, RoomId: roomId, UserId: userId });
  //

  
  res.json(booking) 

})

// router.delete("/user/:userId", async (req,res) => {
//   const bookingsId = req.params.bookingId
//   await Bookings.destroy({where: {id:bookingsId}});
//   res.json("Réservation effacée")
// })

// router.delete("/user/:userId/:bookingId", async (req,res) => {
//   const bookingsId = req.params.bookingId
//   await Bookings.destroy({where: {id:bookingsId}});
//   res.json("Réservation effacée")
// })


module.exports = router;

