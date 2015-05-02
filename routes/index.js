var db = require('../db');
var mongoose = require('mongoose');
var majorSchema = require('../schemas/major');

var Major = mongoose.model('Major');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.seed = function(req,res){

	new Major({
		name : 'Computer Science',
		secondary : 'Art Studio',
		explanation : 'Study graphics and the underlying processes of rending images',
		career : 'Graphic Designer',
		famous : 'Paula Scher: American Graphic Designer'
	}
		).save(function (err, major){ 
			console.log(major)
		})
}

exports.retrieve = function(req,res){
	Major.find({}, function(err, docs) {
		console.log(docs);
		res.render("majors", {majors:docs});
	})
}

exports.computer = function(req,res){
	Major.find({}, function(err, docs) {
		console.log(docs);
		res.render("computer", {majors:docs});
	})
}