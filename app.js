"use-strict"

var express = require('express');
var router = express.Router(); // get an instance of the express Router




var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use('/', require('./app/controllers/static'))

var port = process.env.PORT || 1850
var server = app.listen(port, function() {
    console.log('Magic begins at port ', port);
});
