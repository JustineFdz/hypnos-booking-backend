const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeeSystem",
});

app.get("/", (req, res) => {
  res.send("This message is sent from hypnos backend");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Your backend server is running on port 3000");
});
