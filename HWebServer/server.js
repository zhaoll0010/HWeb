var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
require('./app/routes')(app);

app.listen(port);

// shoutout to the user                     
console.log('Magic happens on port ' + port);
//commite
// expose app           
exports = module.exports = app;                         
//dsfsdf