const express = require('express');
const path = require('path');
const logger = require('morgan');
const makeConnection = require('./connection');

const indexRouter = require('./routes/index');

const app = express();

// views and view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// connect database
makeConnection();

// routes setup
app.use('/', indexRouter);

// server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});