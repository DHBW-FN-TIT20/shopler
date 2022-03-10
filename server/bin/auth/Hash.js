const argon2 = require('argon2');

/*
 * Create password hash using argon2
 * Can throw!
 * Expects validated inputs
 */
 async function createHash(password) {
    return await argon2.hash(password);
}

/*
 * Verify password in user object using argon2
 * Can throw!
 * Expects validated inputs!
 */
async function validateUserPassword(user, user_password) {
    return await argon2.verify(user.password, user_password);
}

exports.createHash = createHash();
exports.validateUserPassword = validateUserPassword();
