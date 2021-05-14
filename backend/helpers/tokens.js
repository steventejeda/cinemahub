const jwt = require("jsonwebtoken");

/** return signed JWT from user data. */

const SECRET_KEY = process.env.SECRET_KEY

function createToken(user) {


  let payload = {
    username: user.username,
   
  };

  return jwt.sign(payload);
}

module.exports = { createToken, SECRET_KEY };
