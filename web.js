var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var data = fs.readFileSync("index.html");
var buf = new Buffer(data);
var index = buf.toString("utf-8", 0)
app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
