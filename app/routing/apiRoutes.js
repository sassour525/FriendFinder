// Data Routes
var path = require("path");

//array to hold each user of the site
var users = [];
//export the paths to be used in the server.js file
module.exports = function(app) {

	//serve user objects
	app.get("/api/friends", function(req, res) {
		return res.json(users);
	});

	//post data from survey entries / calculate match
	app.post("/api/friends", function(req, res) {
		var userReq = req.body;
		console.log(userReq);

		//user constructor
		function User(name, photo, scores) {
			this.name = name;
			this.photo = photo;
			this.scores = scores;
		};

		//use constructor to create new user
		var newUser = new User(userReq.name, userReq.photo, userReq.scores);

		//add new entry to users array
		users.push(newUser);

		//array used to calculate match
	    var totalArray = [];

	    //loop through users array and compare scores to the new user
		for (var i = 0; i < users.length; i++) {
			var totalDifference = 0;
			for(var j = 0; j < newUser.scores.length; j++) {
				if (newUser.scores[j] != users[i].scores[j]) {
					totalDifference += Math.abs(newUser.scores[j] - users[i].scores[j]);
				} 	
			}
			console.log(totalDifference);
			totalArray.push(totalDifference);
		}

		console.log("Total Array: " + totalArray);
		//remove last entry in the array so you do not match with yourself
		totalArray.pop();

		//function to find minium value in array
		Array.min = function(array){
			return Math.min.apply(Math, array);
		};

		//index of the minimum entry to serve to modal
		var minimum = totalArray.indexOf(Array.min(totalArray));
		console.log(minimum);

		//return user object at the index location
		res.json(users[minimum]);
	});
}