const express = require('express');
const ejs = require('ejs');
const errorPage = require('./routes/error');
const wishPage = require('./routes/main');
const bodyParser = require('body-parser');
const app = express();
require('./models/db');

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(wishPage);
app.use(errorPage);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000.');
});