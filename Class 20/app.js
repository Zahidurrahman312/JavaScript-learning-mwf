console.log("JavaScript connected!");


// var now = new Date();

// var age = new Date("20,02,2028");

// var time = now.getTime();

// var mstoday = age.getTime();

// var current = age - time ;

// var days = current/ (1000 * 60 * 60 * 24 * 31);

// console.log(Math.floor(days));

// Aga calculator

var userInput =prompt ("Enter your age");

var now = new Date();

var dateBrith = new Date(userInput);

var msTime = now.getTime();

var msBrith = dateBrith.getTime();

var currentAge = msTime - msBrith;

var year = Math.floor(currentAge/(1000 * 60 * 60 * 24 * 31 ));

alert(year)




