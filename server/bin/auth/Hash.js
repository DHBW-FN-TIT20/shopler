const argon2 = require('argon2');

/*
 * Create password hash using argon2
 * Can throw!
 * Expects validated inputs
 */
exports.createHash = async function(password) {
    return await argon2.hash(password);
}

/*
 * Verify password in user object using argon2
 * Can throw!
 * Expects validated inputs!
 */
exports.validateUserPassword = async function(user, user_password) {
    return await argon2.verify(user.password, user_password);
}
