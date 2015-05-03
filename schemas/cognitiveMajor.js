var mongoose = require('mongoose');

module.exports = mongoose.model("cognitiveMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});