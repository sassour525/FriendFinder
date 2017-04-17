// Data Routes
app.get("/api/friends", function(res, req) {
	return res.json(friends);
});

app.post("/api/friends", function(res, req) {
	var userRes = req.body;
	var newUser = new User(userRes.name, userRes.photo, userRes.scores);

	users.push(newUser);

    var totalArray = [];

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

	Array.min = function(array){
    	return Math.min.apply(Math, array);
	};

	var minimum = totalArray.indexOf(Array.min(totalArray));
	console.log(minimum);

	res.json(users[minimum]);
});