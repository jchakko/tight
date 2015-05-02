var mongoose = require('mongoose');

module.exports = mongoose.model("Major", {
	name : String,
	secondary : String
});