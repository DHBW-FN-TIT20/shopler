const argon2 = require('argon2');

/**
 * Hash and salt the password using argon2.
 *
 * @param {string} password String of password which should be hashed.
 * @returns Hashed password string.
 */
exports.createHash = async function(password) {
    return await argon2.hash(password);
}

/**
 *
 * @param {User} user Object of user whose password should be verified.
 * @param {string} user_password String of the password which should be verified against user.
 * @returns True if the password is valid. Else false.
 */
exports.validateUserPassword = async function(user, user_password) {
    return await argon2.verify(user.password, user_password);
}
