const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { get } = require('./controller/checkoutController.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.get('/api/checkout/:id', get);
const PORT = 3010;
app.listen(PORT);
