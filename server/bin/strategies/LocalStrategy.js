const { use } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./../../models/users").User;
const Hash = require("./../../bin/auth/Hash");

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    const user = User.findByPk(id);
    if (user === null) {
        return done(null, false, {
            message: 'User not found.'
        });
    }
    done(null, user);
});

passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },

    async function(req, username, password, done) {
        const user = await User.findOne({where: {username: username}})
        if (user !== null) {
            return done(null, false, {
                message: 'Username is already taken.'
            });
        }
        const hashedPassword = await Hash.createHash(password);
        const newUser = await User.create({username: username, password: hashedPassword})
        if (!newUser) {
            return done(null, false);
        }
        return done(null, newUser);
    }
));

passport.use('local-login', new LocalStrategy(
    {
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    },
    async function(req, username, password, done) {
        const user = await User.findOne({where: {username: username}});
        if (user === null) {
            return done(null, false, {
                message: 'User not found.',
                code: 401
            });
        }
        if (!await Hash.validateUserPassword(user, password)) {
            return done(null, false, {
                message: 'Wrong password.',
                code: 401
            });
        }
        return done(null, user);
    }
));
