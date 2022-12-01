const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/users').User;

// options for JWT
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // get JWT as Baerer
opts.secretOrKey = process.env.JWT_SECRET; // secret to to check against
opts.passReqToCallback = true; // pass request to callback function for later use

/**
 * Strategy to verify JWTs.
 */
passport.use(
    new JwtStrategy(opts, function (req, jwt_payload, done) {
        // find user and return if found and null if not
        const user = User.findByPk(jwt_payload.id);
        if (user === null) {
            return done(null, false, {
                message: 'User not found.'
            });
        }
        if (user) {
            return done(null, user)
        }
    })
)
