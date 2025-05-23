const express = require('express');
const router = require('./route');
const path = require('path');
const app = express();

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(router);

module.exports = app;
