const express = require('express');
const router = express.Router();
const passport = require('passport');
const { verifyUser } = require('./../bin/auth/authenticate');
const { User } = require("./../models/users");
const { Category } = require("./../models/categories");
const { Item } = require("./../models/items");
const { database } = require('../bin/db/connect');

/**
 * Implements route to add a new item to the database.
 */
router.post("/newitem", verifyUser, async (req, res, next) => {
    const data = await req.body;
    const user = await req.user;

    const categoryIdList = data.categoryList;
    const itemName = data.itemName;
    const itemDescription = data.itemDescription;

    // check if itemName was send
    if (!itemName) {
        res.statusCode = 400;
        return res.send("Item Name missing.");
    }

    // find sent categories in database
    const categories = await Category.findAll({where: {id: categoryIdList}});
    if (categories.length !== categoryIdList.length) {
        res.statusCode = 404;
        return res.send("Category not found.");
    }
    // try to create item and assign send categories
    try {
        await database.transaction(async (t) => {
            const item = await Item.create({name: itemName, description: itemDescription, userId: user.id}, {transaction: t});
            categories.forEach(category => {
                item.addCategory(category);
            });
        });
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internal Server Error");
    }
    res.send({success: true});
});

/**
 * Implements route to get all Categories from the Database.
 * It returns an array of JSON objects which have the id and name of the category.
 */
router.get("/categories", verifyUser, async (req, res, next) => {
    var categories = [];
    try {
            categories = await Category.findAll({
            attributes: ['id', 'name']
        });
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internal Server Error");
    }
    res.send({categories});
});

/**
 * Route to get all items from the database.
 */
router.get("items", verifyUser, async (req, res, next) => {

});

module.exports = router;
