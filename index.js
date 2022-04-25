const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();


app.use(express.json());
app.use(cors());
// app.use(cors({

//   origin:'https://hypnos-app.herokuapp.com/', 
// credentials:true,            //access-control-allow-credentials:true
// optionSuccessStatus:200
// }));


// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", '*');
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
// });

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

// 
