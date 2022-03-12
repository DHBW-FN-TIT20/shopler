const User = require('./../models/users');
const hash = require('./../bin/auth/Hash');
var express = require('express');
var ironSession = require('iron-session/express').ironSession;
var router = express.Router();



const login = async (username, password) => {
    const user = await User.findOne({where: {username: username}});
    if (user == null) {
        return undefined;
    }
    if (!await hash.validateUserPassword(user, password)) {
        return undefined;
    }
    return user;
}

router.get('/', function(req, res, next) {
    // Only POST allowed
    if (req.method !== "POST") {
        res.setHeader('Allow', ["POST"]);
        res.status(405).json({
            reason: "Wrong HTTP method. Please contact your administrator."
        });
        return;
    }

    const username = req.body.username;
    const password = req.body.password;

    const auth_failure = () => res.status(403).json({
        reason: "User not found or wrong password."
    });

    try {
        // Try to login via database
        const user = await login(username, password);
        if (!user) {
            auth_failure();
            return;
        }

        // On success make iron-session
        req.session.user = user;
        await req.session.save();
    } catch (err) {
        auth_failure();
        console.error(err);
        return;
    }

    // Successful login!
    res.status(200).send();
});

module.exports = router;
