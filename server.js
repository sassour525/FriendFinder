var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var users = [];

htmlRoutes(app);
apiRoutes(app);

function User(name, photo, scores) {
	this.name = name;
	this.photo = photo,
	this.scores = scores;
};

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});