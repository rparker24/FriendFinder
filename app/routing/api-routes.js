var express = require('express');
var path = require('path');

var app = express();

var friendsData	= require('../data/friends.js');

module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		var newFriend = req.body;
		friendsData.push(newFriend);
		res.json(friendsData);
		console.log(friendsData);
	});

	app.post('/api/clear', function(req, res) {
		// Empty out the arrays of data
		friendsData = [];

		console.log(friendsData);
	})
}