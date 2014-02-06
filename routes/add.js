var data = require("../data.json");

exports.addFriend = function(req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var imageURL = 'http://lorempixel.com/400/400/people'
	var newFriend = {
		"name" : name,
		"description" : description,
		"imageURL" : imageURL
	}
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add', data);
}