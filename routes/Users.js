const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require("bcrypt")

router.post("/", async (req,res) => {
  const {name,surname,mail,password} = req.body;
  bcrypt.hash(password,10).then((hash) => {
    Users.create({
      name: name,
      surname: surname,
      mail:mail,
      password: hash,
    });
    res.json("SUCCESS")
  })
});

router.post('/login', async(req,res) =>{
  const {mail,password} = req.body;
  const user=await Users.findOne({ where : {mail : mail }});

  if (user)
  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      res.json({ error: 'Wrong Username and Password combination' });
    else res.json('You logged in!!!');
  });
  // else{
  //     res.json({ error: "User dosen't exist"})
  // }
});

module.exports = router;
  