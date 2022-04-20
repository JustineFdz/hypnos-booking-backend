const {verify} = require("jsonwebtoken")

const validateToken = (req, res, next) =>{
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({error:"Utilisateur non connecté!"});

  try{
    const validToken = verify(accessToken, "importantsecret");

    if (validToken) {
      return next();
    }
  }catch (err){
    return res.json({error:err})

  }
}

module.exports = {validateToken};