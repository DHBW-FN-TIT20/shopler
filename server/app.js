var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const passport = require('passport');
const cors = require("cors");

// Load environment variables
require('dotenv').config();

// setup passport
require('./bin/strategies/LocalStrategy');
require('./bin/strategies/JwtStrategy');
require('./bin/auth/authenticate')

// Import models
const { database } = require("./bin/db/connect");
const { User } = require('./models/users');
const { Item } = require('./models/items');
const { Category } = require('./models/categories')
const { List } = require('./models/lists');
const { CartItem } = require('./models/cartItems');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRoutes');
const apiRouter = require('./routes/apiRoutes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())


const whitelist = process.env.WHITELISTED_DOMAINS

  ? process.env.WHITELISTED_DOMAINS.split(",")

  : []


const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },


  credentials: true,

}

app.use(cors(corsOptions))

// setup routes
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/api', apiRouter);

// setup database
try {
  Item.belongsToMany(Category, {through: 'item_cat'});
  Category.belongsToMany(Item, {through: 'item_cat'});
  Item.hasMany(CartItem);
  Item.belongsTo(User);
  List.hasMany(CartItem);
  User.hasOne(List);
  database.sync();
} catch (err) {
  console.error(err);
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
