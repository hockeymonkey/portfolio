var express = require("express");
var app = express();
var fs = require("fs");
var path = require('path');
var bodyParser = require("body-parser");

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

// Set up 'public' directory for serving static content.
app.use(express.static(path.join(__dirname, 'public')));

// app.post("/route", function(req, res) {
// 	res.send();
// });

// Start node.js server and tell it to listen for requests on port 8080.
app.listen(8080,function(){
	console.log("Node server listening on port 8080.");
});