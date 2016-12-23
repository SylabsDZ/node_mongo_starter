const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


var app = express();
var router = require('./services/router');

mongoose.connect('mongodb://localhost:itemStarter/itemStarter');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, function(){
  console.log('listening...');
});
