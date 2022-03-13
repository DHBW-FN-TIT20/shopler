const express = require('express');
const router = express.Router();
const User = require('./../models/users').User;
const passport = require('passport')
const jwt = require('jsonwebtoken');

const {getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser} = require('./../bin/auth/authenticate');
const { token } = require('morgan');

router.post("/signup", (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            console.log(err)
            res.statusCode = 500;
            return res.send(err);
        }
        if (!user) {
            res.statusCode = 500;
            return res.json({message: info.message});
        }
        const token = getToken({id: user.id});
        const refreshToken = []
        refreshToken[0] = getRefreshToken({id: user.id});
        user.refreshToken = refreshToken;
        try {
            user.save();
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
            res.send({success: true, token});
        } catch (err) {
            res.statusCode = 500;
            res.send(err);
            console.log(err);
        }
    })(req, res, next);
});

router.post("/login", (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
        if (err) {
            console.log(err);
            res.code = 500;
            return res.send(err);
        }
        if (!user) {
            if (info.code !== undefined) {
                res.statusCode = info.code;
            } else {
                res.statusCode = 500;
            }
            return res.json({message: info.message});
        }
        console.log("UserID: ", user.id)
        const token = getToken({id: user.id});
        const refreshTokenArr = user.refreshToken;
        const refreshToken = getRefreshToken({id: user.id});
        refreshTokenArr.push(refreshToken);
        user.refreshToken = refreshTokenArr;
        try {
            user.save();
            res.header('Access-Control-Allow-Credentials', true);
            res.header("Access-Control-Allow-Headers", "X-Custom-Header");
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
            res.send({success: true, token});
        } catch (err) {
            res.statusCode = 500;
            res.send(err);
            console.log(err);
        }
    })(req, res, next);
});

router.post("/refreshToken", async (req, res, next) => {
    const {signedCookies = {}} = req;
    const {refreshToken} = signedCookies;

    if (refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const userId = payload.id;
            const user = await User.findOne({where: {id: userId}});
            if (user) {
                var refreshTokenArray = user.refreshToken;
                const tokenIndex = refreshTokenArray.findIndex(item => item === refreshToken)
                if (tokenIndex === -1) {
                    res.statusCode = 401;
                    res.send("No Token in DB");
                } else {
                    const token = getToken({id: userId});
                    const newRefreshToken = getRefreshToken({id: userId});
                    refreshTokenArray[tokenIndex] = newRefreshToken;
                    user.refreshToken = refreshTokenArray;
                    try {
                        user.save();
                        res.header('Access-Control-Allow-Credentials', true);
                        res.header("Access-Control-Allow-Headers", "X-Custom-Header");
                        res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS);
                        res.send({success: true, token});
                    } catch (err) {
                        res.statusCode = 500;
                        res.send(err);
                        console.log(err);
                    }
                }
            } else {
                res.statusCode = 401;
                res.send("No user.");
            }
        } catch (err) {
            console.log(err);
            res.statusCode = 401;
            res.send("Unauthorized")
        }
    } else {
        res.statusCode = 401;
        res.send("No Token");
    }
});

router.get("/logout", verifyUser, async (req, res, next) => {
    const {signedCookies = {}} = req;
    const {refreshToken} = signedCookies;
    const user = await req.user;
    if (!user) {
        res.statusCode = 500;
        return res.send("User not found.");
    }
    const refreshTokenArr = user.refreshToken;
    const tokenIndex = refreshTokenArr.indexOf(refreshToken)
    if (tokenIndex !== -1) {
        refreshTokenArr.splice(tokenIndex, 1);
    } else {
        res.statusCode = 401;
        return res.send("Unauthorized.");
    }
    user.refreshToken = refreshTokenArr;
    try {
        user.save();
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Headers", "X-Custom-Header");
        res.clearCookie("refreshToken", COOKIE_OPTIONS);
        res.send({success: true});
    } catch (err) {
        res.statusCode = 500;
        res.send(err);
        console.log(err);
    }
});

router.get("/me", verifyUser, async (req, res, next) => {
    const user = await req.user;
    res.send({username: user.username});
});

module.exports = router
