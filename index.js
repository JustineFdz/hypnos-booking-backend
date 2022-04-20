const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

const hotelsRouter = require('./routes/Hotels')
app.use("/hotels", hotelsRouter);

const roomsRouter = require('./routes/Rooms')
app.use("/rooms", roomsRouter);

const bookingsRouter = require('./routes/Bookings')
app.use("/bookings", bookingsRouter);


db.sequelize.sync().then(() => {
  app.listen( 3001, () => {
    console.log("Yeah! Your backend server is running on port 3001");
  });
});
