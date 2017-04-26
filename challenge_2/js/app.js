console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Bob Schank";
  this.age = '29';
  this.city = 'Rochester';
  this.state = 'New York';
  this.shout = function(x) {return `${x.toUpperCase()}!`;};
}

app.controller("")