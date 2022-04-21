const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();


app.use(express.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Pass to next layer of middleware
    next();
});
app.use(cors({
    origin: ['https://hypnos-app.herokuapp.com', 'http://localhost:3000']
}));


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
