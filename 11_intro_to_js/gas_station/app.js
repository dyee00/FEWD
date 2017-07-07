var gasLevel =  parseInt( prompt("What is your current fuel level?") );
var gasPrice =  parseInt( prompt("What is the price of gas?") );

if (gasLevel < 10 && gasPrice < 4 ) {
	console.log ("Let's stop here for gas.");
} else {
	console.log ("Don't need gas from here. Moving on.");
}
