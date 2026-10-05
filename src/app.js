const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', require('./routes'));

app.use((req, res) => {
  res.status(404).render('404', { titulo: 'No encontrado' });
});

module.exports = app;