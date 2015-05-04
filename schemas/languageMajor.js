var mongoose = require('mongoose');

module.exports = mongoose.model("languageMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});