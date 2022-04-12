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

app.get("/hotels", (req, res) => {
  const hotels = [
    {
        hotelTitle:"La Bergerie",
        roomsTitle:[
            "La diamant",
            "La rubis",
            "La saphir",
            "L'améthyste",
            "L'eben"
        ]
    },
    {
        hotelTitle:"Le Chabichou",
        roomsTitle:[
            "La diamant1",
            "La rubis1",
            "La saphir1",
            "L'améthyste1",
            "L'eben1"
        ]
    },
    {
        hotelTitle:"L'Altapure'",
        roomsTitle:[
            "La diamant2",
            "La rubis2",
            "La saphir2",
            "L'améthyste2",
            "L'eben2"
        ]
    },
]
  res.send(hotels);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Yeah! Your backend server is running on port 3000");
});
