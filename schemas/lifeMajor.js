var mongoose = require('mongoose');

module.exports = mongoose.model("lifeMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});