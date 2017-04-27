console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", [])
	.controller("WelcomeController", WelcomeController)
	.controller("SecondController", SecondController);

function WelcomeController(){
  this.full_name = "Bob Schank";
  this.age = '29';
  this.city = 'Rochester';
  this.state = 'New York';
  this.shout = function(x) {return `${x.toUpperCase()}!`;};
}

function SecondController(){
	this.class_name = "WDI3";
	this.enrolled_students = 12;
	this.start_date = 4;
	this.end_date = 95;
	this.daysRemaining = function(e, s) {
		return e - s;
	};
}