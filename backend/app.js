"use strict";

/** Express app for Cinemahub. */

const express = require("express");
const cors = require("cors");


const { NotFoundError } = require("./expressError");

const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");

const morgan = require("morgan");



const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

app.use("/auth", authRoutes);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});


module.exports = app;


app.listen(3001, () => {
    console.log("Server Started!")
})