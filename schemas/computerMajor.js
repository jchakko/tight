var mongoose = require('mongoose');

module.exports = mongoose.model("computerMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});