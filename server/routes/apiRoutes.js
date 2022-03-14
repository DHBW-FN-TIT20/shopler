const express = require('express');
const router = express.Router();
const passport = require('passport');
const { verifyUser } = require('./../bin/auth/authenticate');
const { User } = require("./../models/users");
const { Category } = require("./../models/categories");
const { Item } = require("./../models/items");
const { CartItem } = require("./../models/cartItems");
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
router.get("/items", verifyUser, async (req, res, next) => {
    const user = await req.user;
    var items = {};
    try {
        /**
         * Find all items and select id, name, description from item
         * and id from category from the requesting user.
         */
        items = await Item.findAll({
            attributes: [
                'id',
                'name',
                'description'
            ],
            include: {
                model: Category,
                attributes: [
                    'id'
                ],
                through: {
                    attributes: []
                }
            },
            where: {
                userId: user.id
            }
        });
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internaml Server Error");
    }
    res.send(JSON.stringify(items));
});

/**
 * Add a new item to the shopping list.
 */
router.post("/addcartitem", verifyUser, async (req, res, next) => {
    const user = await req.user;
    const itemId = await req.body.itemId;
    // Check if item exists.
    const item = await Item.findByPk(itemId);
    if (item === null) {
        res.statusCode = 404;
        return res.send("Item not found");
    }
    const cartItem = await CartItem.findOne({
        where: {
            itemId: itemId,
            userId: user.id
        }
    });
    // If a cart item already exists increment count
    if (cartItem !== null) {
        try {
            ++cartItem.count;
            cartItem.save();
            return res.send({success: true});

        } catch (err) {
            console.log(err);
            res.statusCode = 500;
            return res.send("Internal Server Error");
        }
    }
    // If no cart item exists, create one
    try {
        const newCartItem = CartItem.create({
            itemId: itemId,
            userId: user.id
        });
        if (newCartItem === null)
            throw Error();
        return res.send({success: true});
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internal Server Error");
    }
});

/**
 *  Send all Cart Item for the user.
 */
router.get("/cartitems", verifyUser, async (req, res, next) => {
    const user = await req.user;
    try {
        // If cart is empty send empty array
        const count = await CartItem.count();
        if (count === 0) {
            return res.send("[]");
        }
        // Find all cart items and send them
        const cartItems = await CartItem.findAll({
            attributes: ['id', 'count'],
            include: {
                model: Item,
                attributes: ['name']
            },
            where: {
                userId: user.id
            }
        });
        return res.send(JSON.stringify(cartItems));
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internal Server Errror");
    }
})

/**
 * Remove given Cart Item.
 */
router.post("/removecartitem", verifyUser, async (req, res, next) => {
    const user = await req.user;
    const cartItemId = await req.body.cartItemId;
    try {
        // delete cart item
        const count = await CartItem.destroy({where: {id: cartItemId, userId: user.id}});
        if (count === 0) {
            res.statusCode = 404;
            return res.send("Cart Item not found");
        }
        res.send({success: true});
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        return res.send("Internal Server Error");
    }
});


module.exports = router;
