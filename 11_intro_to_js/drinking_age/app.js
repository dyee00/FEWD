var age =  parseInt( prompt("What is your age?") );

if (age > 21) {
	console.log ("Come on in");
}	else {
	console.log ("You're not old enough");
	console.log ("Come back in " + (21 - age) + " years");
}