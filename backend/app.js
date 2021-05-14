/** Application for bank.ly */

const express = require('express');
const app = express();
const ExpressError = require("./helpers/expressError");



app.use(express.json());


const authRoutes = require('./routes/auth');

app.use('/auth', authRoutes);

/** 404 handler */

app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass the error to the next piece of middleware
    return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        status: err.status,
        message: err.message
    });
});

module.exports = app;