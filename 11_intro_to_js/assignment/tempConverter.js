/* Temperature converter */ 

var currentTemp = prompt("What is the current Temperature?");
var tempScale = prompt("What temperature conversion would you like, F to C or C to F?");


if (tempScale === "F to C") {
	console.log((currentTemp - 32) * 5 / 9);
} else if (tempScale ==="C to F") {
	console.log(currentTemp * 9 / 5 + 32);
}