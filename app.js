const express = require('express');
const router = require('./src/routes/route.js');;
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(router);

module.exports = app;
