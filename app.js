const express = require('express');
const path = require('path');
const app = express();

const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');
const cookieParser = require('cookie-parser');

const sessionOptions = session({
  secret: process.env.KEY_SECRET,
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTSTRING
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);

app.use(connectFlash());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

const { csrfMiddlware, middlewareMessage } = require('./src/middleware/middleware.js');
app.use(csrfMiddlware);
app.use(middlewareMessage);

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const router = require('./src/routes/route.js');
app.use(router);

module.exports = app;
