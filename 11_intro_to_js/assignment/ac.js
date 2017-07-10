/* Air Conditioner */ 

var currentTemp = prompt("What is the current Temperature?");
var desiredTemp = prompt("What temperature would you like it to be?");

if (desiredTemp < currentTemp) {
	console.log("Turning off the A/C! It's too cold!,");
} else if (desiredTemp === currentTemp) {
	console.log("A perfect temperature. Keep the cool!");
} else {
	console.log("Turning on the A/C! It's boiling in here!");
} 