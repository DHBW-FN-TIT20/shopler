const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/users').User;

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.passReqToCallback = true;

passport.use(
    new JwtStrategy(opts, function (req, jwt_payload, done) {
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
