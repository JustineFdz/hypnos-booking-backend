const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt")

const{sign} = require('jsonwebtoken');

router.post("/", async (req,res) => {
  const {name,surname,mail,password} = req.body;
  try {
    bcrypt.hash(password,10).then((hash) => {
      Users.create({
        name: name,
        surname: surname,
        mail:mail,
        password: hash,
        // role:null,
      });
      res.json("SUCCESS")
    })
  } catch (error) {
    console.log("error")
    res.json(null)
  }

});

router.post('/login', async(req,res) =>{
  const {mail,password} = req.body;
  const user=await Users.findOne({ where : {mail : mail }});
  const { name, surname, id,role} = user;
  if (user)
  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      res.json({ error: 'Wrong Username and Password combination' });
    const accessToken = sign({ mail: user.mail, id: user.id }, "importantsecret");
    res.json({ accessToken, name, surname, id,role});
  });

});

// router.get('/users', async (req, res) => {
//   const userId = req.params.userId;
//   const users = await Users.findAll({ where: { UserId: userId} });
//   res.json(users);
// });

module.exports = router;
  
