const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 4000 );
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }));
app.set('view engine','.hbs');

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index')
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;