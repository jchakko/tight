var mongoose = require('mongoose');

module.exports = mongoose.model("Major", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});