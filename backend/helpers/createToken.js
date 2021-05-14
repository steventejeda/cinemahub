const jwt = require("jsonwebtoken");


/** return signed JWT for payload {username, admin}. */

function createToken(username, admin = false) {
    let payload = { username, admin };
    return jwt.sign(payload);
}


module.exports = createToken;