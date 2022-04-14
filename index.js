const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "bfe061570069c2",
  host: "eu-cdbr-west-02.cleardb.net",
  password: "7705de63",
  database: "heroku_c88c9286219a8f8",
});
// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Ju1721010690",
//   database: "Hypnos",
// });

// app.post('/signup', (req, res) => {

//   const name = req.body.name
//   const surname = req.body.surname
//   const mail = req.body.mail
//   const password = req.body.password
  
//   db.query(
//     "INSERT INTO users (name, surname, mail, password) VALUES (?,?,?,?)",
//     [name, surname, mail, password],
//     (err, result)=>{
//       console.log(err);
//     }
//   );
// });

// app.post('/signin', (req,res) => {

//   const mail = req.body.mail
//   const password = req.body.password
  
//   db.query(
//     "SELECT * FROM users WHERE mail = ? AND password = ?",
//     [mail, password],
//     (err, result)=>{

//       if(err){
//         res.send({err:err});
//       }  
//         if (result.length>0){
//           res.send(result)
//         }else{
//             res.send({message:"Mauvaise combinaison utilisateur/mdp"})
//         }
    
//   }
//   );

// })


// app.get("/hotels", (req, res) => {
//   const hotels = [
//     {
//         hotelTitle:"La Bergerie",
//         roomsTitle:[
//             "La diamant",
//             "La rubis",
//             "La saphir",
//             "L'améthyste",
//             "L'eben"
//         ]
//     },
//     {
//         hotelTitle:"Le Chabichou",
//         roomsTitle:[
//             "La diamant1",
//             "La rubis1",
//             "La saphir1",
//             "L'améthyste1",
//             "L'eben1"
//         ]
//     },
//     {
//         hotelTitle:"L'Altapure'",
//         roomsTitle:[
//             "La diamant2",
//             "La rubis2",
//             "La saphir2",
//             "L'améthyste2",
//             "L'eben2"
//         ]
//     },
// ] 
//   res.send(hotels);
// });



app.listen(process.env.PORT || 3001, () => {
  console.log("Yeah! Your backend server is running on port 3001");
});