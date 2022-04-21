const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();


app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

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


db.sequelize
.sync()
.then(() => {
  app.listen( process.env.PORT || 3001, () => {
    console.log("Yeah! Your backend server is running on port 3001");
});
})
.catch((err) =>{
console.log(err);
});
