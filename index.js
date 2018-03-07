var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('client/index.html', {root: __dirname});
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('My Full Stack review app is listening on port ' + port + '!');
});