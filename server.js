'use strict';

var path = require('path');
var express = require('express');
var app = express(); 
var env = require('dotenv').config();

app.use(express.static(__dirname));

app.listen(process.env.PORT, function() {
    console.log('Server listening');
});