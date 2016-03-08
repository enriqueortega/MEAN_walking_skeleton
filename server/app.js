var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index.js');

app.use(bodyParser.json());
app.use('/', index);

// Witchcraft
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Listening on port: ", port);
});
