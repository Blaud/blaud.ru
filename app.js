const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');


const authRoutes = require('./routes/auth');

//online_shop routes//
const analyticsRoutes = require('./routes/online_shop/analytics');
const categoryRoutes = require('./routes/online_shop/category');
const orderRoutes = require('./routes/online_shop/order');
const positionRoutes = require('./routes/online_shop/position');

const app = express();

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('mongoDB connected'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

//online_shop routes//
app.use('/api/online_shop/analytics', analyticsRoutes);
app.use('/api/online_shop/category', categoryRoutes);
app.use('/api/online_shop/order', orderRoutes);
app.use('/api/online_shop/position', positionRoutes);

module.exports = app;