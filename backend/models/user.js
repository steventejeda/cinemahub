const bcrypt = require('bcrypt');
const db = require('../db');
const ExpressError = require('../helpers/expressError');
const { BCRYPT_WORK_FACTOR } = require("../config");

class User {

    /** Register user with data. Returns new user data. */

    static async register({ username, password }) {
        const duplicateCheck = await db.query(
            `SELECT username 
        FROM users 
        WHERE username = $1`, [username]
        );

        if (duplicateCheck.rows[0]) {
            throw new ExpressError(
                `There already exists a user with username '${username}'`,
                400
            );
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await db.query(
            `INSERT INTO users 
          (username, password) 
        VALUES ($1, $2) 
        RETURNING username, password` [
                username,
                hashedPassword
            ]
        );

        return result.rows[0];
    }


    /** Is this username + password combo correct?
     *
     * Return all user data if true, throws error if invalid
     *
     * */

    static async authenticate(username, password) {
        const result = await db.query(
            `SELECT username,
                password
            FROM users 
            WHERE username = $1`, [username]
        );

        const user = result.rows[0];

        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        } else {
            throw new ExpressError('Cannot authenticate', 401);
        }
    }




}

module.exports = User;