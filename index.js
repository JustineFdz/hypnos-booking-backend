const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();


app.use(express.json());


app.use(function(req, res, next) {
  var allowedOrigins = ['https://hypnos-app.herokuapp.com', 'http://localhost:3000'];
  var Origin = req.headers.Origin;
  if(allowedOrigins.indexOf(Origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', Origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
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
