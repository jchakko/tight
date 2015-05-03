var mongoose = require('mongoose');

module.exports = mongoose.model("continentalMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});