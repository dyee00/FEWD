var userSpeed =  parseInt( prompt("What is your current speed?") );
var speedLimit =  parseInt( prompt("What is the current speed limit?") );

if (userSpeed > speedLimit + 10 ) {
	console.log ("Slow down!");
} else if (userSpeed < speedLimit - 10 ) {
	console.log ("Speed up!");
} else {
	console.log ("You're doing just fine.");
}