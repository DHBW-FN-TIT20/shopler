const passport = require('passport');
const jwt = require('jsonwebtoken');

/**
 * @summary Create token.
 *
 * The token is a JWT with a short lifetime. It is used
 * for API requests and should be stored in memory.
 *
 * @param {User} user User object which should be signed.
 * @returns Signed token.
 */
exports.getToken = user => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: eval(process.env.SESSION_EXPIRY)
    });
}

/**
 * @summary Create refreshToken.
 *
 * The refreshToken is a JWT with a long lifetime. It will
 * only be used to login the user and to get a new token.
 *
 * @param {User} user User object which should be signed.
 * @returns Signed refreshToken
 */
exports.getRefreshToken = user => {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: eval(process.env.REFRESH_TOKEN_EXPIRY)
    });
    return refreshToken;
}

// Use JWT strategy
exports.verifyUser = passport.authenticate('jwt', {session: false})
