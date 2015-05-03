var db = require('../db');
var mongoose = require('mongoose');
var majorSchema = require('../schemas/major');
var computerMajorSchema = require('../schemas/computerMajor');
var mathMajorSchema = require('../schemas/mathMajor');
var lifeMajorSchema = require('../schemas/lifeMajor');
var cognitiveMajorSchema = require('../schemas/cognitiveMajor');

var Major = mongoose.model('Major');
var computerMajor = mongoose.model('computerMajor');
var mathMajor = mongoose.model('mathMajor');
var lifeMajor = mongoose.model('lifeMajor');
var cognitiveMajor = mongoose.model('cognitiveMajor');

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

	new cognitiveMajor({
		name : 'Sociology',
		secondary : 'Economics',
		explanation : 'Evaluate how different thought patterns led to various economic systems',
		career : 'Portfolio Manager',
		famous : 'John von Neumann'
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

/* GET science page. */
exports.science = function(req, res){
  res.render('science', { title: 'Science' });
};

exports.computer = function(req,res){
	computerMajor.find({}, function(err, docs) {
		console.log(docs);
		res.render("computer", {majors:docs});
	})
}

exports.math = function(req,res){
	mathMajor.find({}, function(err, docs) {
		console.log(docs);
		res.render("math", {majors:docs});
	})
}

exports.life = function(req,res){
	lifeMajor.find({}, function(err, docs) {
		console.log(docs);
		res.render("life", {majors:docs});
	})
}

exports.cognitive = function(req,res){
	cognitiveMajor.find({}, function(err, docs) {
		console.log(docs);
		res.render("cognitive", {majors:docs});
	})
}