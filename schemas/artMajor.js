var mongoose = require('mongoose');

module.exports = mongoose.model("artMajor", {
	name : String,
	secondary : String,
	explanation : String,
	career : String,
	famous : String
});
