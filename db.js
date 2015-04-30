var mongoose = require('mongoose');

mongoose.connect("mongodb://jchakko:tight@ds031711.mongolab.com:31711/tightropedb",function(error){
	if(error){
		console.log(error);
	} else{
		console.log("Database Connected");
	}
});

module.exports= mongoose.connection;