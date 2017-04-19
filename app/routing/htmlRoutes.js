// Page Routes
var path = require("path");
//export the paths to be used in the server.js file
module.exports = function(app) {

	//serve the home html page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//serve the survey html page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}
