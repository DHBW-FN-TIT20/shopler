const express = require('express');
const router = express.Router();
const passport = require('passport');
const { verifyUser } = require('./../bin/auth/authenticate');
const { User } = require("./../models/users");
const { Category } = require("./../models/categories");
const { Item } = require("./../models/items");
const { database } = require('../bin/db/connect');

router.get("/newitem", verifyUser, async (req, res, next) => {
    const data = await req.body;
    const user = await req.user;

    const categoryIdList = req.body.categoryList;
    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;

    if (!itemName) {
        res.statusCode = 400;
        return res.send("Item Name missing.");
    }

    const {count, categories} = await Category.findAndCountAll({where: {id: categoryIdList}});
    if (count !== categoryIdList.length) {
        res.statusCode = 404;
        return res.send("Category not found.");
    }
    try {
        await database.transaction(async (t) => {
            const item = await Item.create({name: itemName, discription: itemDescription, userId: user.id}, {transaction: t});
            categories.forEach(category => {
                item.addCategory(category);
            });
        });
    } catch (err) {
        res.statusCode = 500;
        return res.send("Internal Server Error");
    }
    res.send({success: true});
});

module.exports = router;
