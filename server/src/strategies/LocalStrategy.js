const { use } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../../models/users").User;
const Hash = require("../auth/Hash");

/**
 * Strategy to serialize user. The user id will be stored in the JWT.
 */
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

/**
 * Strategy to deserialize user. It will be searched by id.
 */
passport.deserializeUser(async function(id, done) {
    // Find user by id return user if found else null
    const user = await User.findByPk(id);
    if (user === null) {
        return done(null, false, {
            message: 'User not found.'
        });
    }
    done(null, user);
});

/**
 * Strategy to signup user with a username and password.
 */
passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },

    async function(req, username, password, done) {
        // Check if username is already used.
        const user = await User.findOne({where: {username: username}})
        if (user !== null) {
            return done(null, false, {
                message: 'Username is already taken.'
            });
        }
        // Hash and salt password and create new user
        const hashedPassword = await Hash.createHash(password);
        const newUser = await User.create({username: username, password: hashedPassword})
        // return user if it was successfully created else null
        if (!newUser) {
            return done(null, false);
        }
        return done(null, newUser);
    }
));

/**
 * Strategy to login user with username and password.
 */
passport.use('local-login', new LocalStrategy(
    {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    },
    async function(req, username, password, done) {
        // check if username exists in database
        const user = await User.findOne({where: {username: username}});
        if (user === null) {
            return done(null, false, {
                message: 'User not found.',
                code: 401
            });
        }
        // validate password
        if (!await Hash.validateUserPassword(user, password)) {
            return done(null, false, {
                message: 'Wrong password.',
                code: 401
            });
        }
        return done(null, user);
    }
));
