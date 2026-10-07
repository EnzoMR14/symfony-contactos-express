const path = require('path');
const express = require('express');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 2 }, // 2 horas
}));

// El usuario logueado estará disponible en todas las vistas
app.use((req, res, next) => {
  res.locals.usuario = req.session.usuario || null;
  next();
});

app.use('/', require('./routes'));

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'No encontrado' });
});

module.exports = app;