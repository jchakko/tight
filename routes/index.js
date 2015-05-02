var db = require('../db');
var mongoose = require('mongoose');
var majorSchema = require('../schemas/major');
var computerMajorSchema = require('../schemas/computerMajor');

var Major = mongoose.model('Major');
var computerMajor = mongoose.model('computerMajor');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.seed = function(req,res){

	new Major({
		name : 'Computer Science',
		secondary : 'Neuroscience',
		explanation : 'Computational neuroscience is the study of brain function of the information processing properties of the structures that compose the nervous system',
		career : 'Artificial Intelligence Programmer',
		famous : 'Alan Turing'
	}
		).save(function (err, major){ 
			console.log(major)
		})
}

exports.seedData = function(req,res){

	new Major({
		name : 'Computer Science',
		secondary : 'Psychology',
		explanation : 'Understanding human behavior leads to more user friendly software and hardware',
		career : 'Human-Computer Interaction',
		famous : 'Douglas Engelbart'
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
	computerMajor.find({}, function(err, docs) {
		console.log(docs);
		res.render("computer", {majors:docs});
	})
}