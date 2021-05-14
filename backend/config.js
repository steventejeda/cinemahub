"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY;




// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return ("cinemahub")
    
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = "test" ? 1 : 12;


module.exports = {
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
  SECRET_KEY
};
