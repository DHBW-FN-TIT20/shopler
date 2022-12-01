const express = require('express');
const router = express.Router();
const User = require('./../models/users').User;
const passport = require('passport')
const jwt = require('jsonwebtoken');

const {getToken, getRefreshToken, verifyUser} = require('./../bin/auth/authenticate');

/**
 * Implements route to signup a new user.
 *
 * Expects JSON object with username and password attribute.
 *
 * Returns JSON object with token and refreshToken attribute.
 */
router.post("/signup", (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        // check if passport strategy returns error
        if (err) {
            console.log(err)
            res.statusCode = 500;
            return res.send(err);
        }
        // check if a user was found
        if (!user) {
            res.statusCode = 500;
            return res.json({message: info.message});
        }
        // Generate new JWT and refreshToken
        const token = getToken({id: user.id});
        const refreshToken = []
        refreshToken[0] = getRefreshToken({id: user.id});
        user.refreshToken = refreshToken;
        // try to assign refreshToken to user and send tokens.
        try {
            user.save();
            res.send({success: true, token, refreshToken});
        } catch (err) {
            res.statusCode = 500;
            res.send(err);
            console.log(err);
        }
    })(req, res, next);
});

/**
 * Implements route to login an already existing user.
 *
 * Expects JSON object with username and password attribute.
 *
 * Returns JSON object with token and refreshToken attribute.
 */
router.post("/login", (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
        // check if passport strategy returns error
        if (err) {
            console.log(err);
            res.statusCode = 500;
            return res.send(err);
        }
        // check if user was found
        if (!user) {
            if (info.code !== undefined) {
                res.statusCode = info.code;
            } else {
                res.statusCode = 500;
            }
            return res.json({message: info.message});
        }
        // generate new tokens and append refreshToken to user
        const token = getToken({id: user.id});
        const refreshTokenArr = user.refreshToken;
        const refreshToken = getRefreshToken({id: user.id});
        refreshTokenArr.push(refreshToken);
        user.refreshToken = refreshTokenArr;
        // try to save user and send tokens
        try {
            user.save();
            res.send({success: true, token, refreshToken});
        } catch (err) {
            res.statusCode = 500;
            res.send(err);
            console.log(err);
        }
    })(req, res, next);
});

/**
 * Implements a route to get a new refreshToken.
 *
 * Expects a valid token as Baerer Token and a
 * JSON object with a refresh token attribute.
 *
 * Returns a JSON object with token and refreshToken attribute.
 */
router.post("/refreshToken", async (req, res, next) => {

    const refreshToken = req.body.refreshToken;
    //check if refreshToken was send
    if (refreshToken) {
        try {
            // verify refreshToken
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const userId = payload.id;
            const user = await User.findOne({where: {id: userId}});
            // check if user was found
            if (user) {
                // find used refreshToken in database
                var refreshTokenArray = []
                refreshTokenArray = user.refreshToken;
                const tokenIndex = refreshTokenArray.findIndex(item => item === refreshToken)
                // check if refreshToken was found
                if (tokenIndex === -1) {
                    res.statusCode = 401;
                    res.send("No Token in DB");
                } else {
                    // append new refreshToken to user
                    const token = getToken({id: userId});
                    const newRefreshToken = getRefreshToken({id: userId});
                    refreshTokenArray[tokenIndex] = newRefreshToken;
                    user.refreshToken = refreshTokenArray;
                    // save user and send tokens
                    try {
                        user.save();
                        res.send({success: true, token, refreshToken: newRefreshToken});
                    } catch (err) {
                        res.statusCode = 500;
                        res.send(err);
                        console.log(err);
                    }
                }
            } else /* (!user) */{
                res.statusCode = 401;
                res.send("No user.");
            }
        } catch (err) {
            console.log(err);
            res.statusCode = 401;
            res.send("Unauthorized")
        }
    } else /* (refreshToken) */ {
        res.statusCode = 401;
        res.send("No Token");
    }
});

/**
 * Implements a logout route to logout the user and remove
 * the currently used refreshToken from the database.
 *
 * Expects a valid JWT as Bearer Token and a JSON object
 * with refreshToken attribute.
 */
router.post("/logout", verifyUser, async (req, res, next) => {
    const refreshToken = await req.body.refreshToken;
    const user = await req.user;
    // check if user exists
    if (!user) {
        res.statusCode = 500;
        return res.send("User not found.");
    }
    // find used refreshToken in database
    const refreshTokenArr = user.refreshToken;
    const tokenIndex = refreshTokenArr.indexOf(refreshToken)
    // check if refreshToken was found
    if (tokenIndex !== -1) {
        // remove refreshToken
        refreshTokenArr.splice(tokenIndex, 1);
    } else {
        res.statusCode = 401;
        return res.send("Unauthorized.");
    }
    // try to safe user with removed refreshToken
    user.refreshToken = refreshTokenArr;
    try {
        user.save();
        res.send({success: true});
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
        console.log(err);
    }
});

module.exports = router
