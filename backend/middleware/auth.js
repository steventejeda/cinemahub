/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
    try {
        if (req.curr_username) {
            return next();
        } else {
            return next({ status: 401, message: 'Unauthorized' });
        }
    } catch (err) {
        console.log("login error!");
        return next(err);

    }
}


/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/


function authUser(req, res, next) {
    try {
        const token = req.body._token || req.query._token;
        if (token) {
            // let payload = jwt.decode(req.body._token); /// Security risk
            let payload = jwt.verify(req.body._token, SECRET_KEY);
            req.curr_username = payload.username;
            req.curr_admin = payload.admin;
        }
        return next();
    } catch (err) {
        return next(err);
        console.log("authuser error!")
    }
} 

module.exports = {
    requireLogin,
    authUser
};