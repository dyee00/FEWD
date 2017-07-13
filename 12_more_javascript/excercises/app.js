// bigOrSmall

var bigOrSmall = function(number) {
	var sum = 10; 
	if (number > sum) {
		console.log("This number is big");
	} else if (number < sum) {
		console.log("This number is small");
	}
};


// oddOrEven 

var oddOrEven = function(number) {
	if (number%2 == 0) {
		console.log("This number is even");
	}
	else {
		console.log("This number is odd");
	}
}


// embiggen

var embiggen = function(string) {
	var allCaps = string.toUpperCase();
	return allCaps;
};


// reverser

var reverser = function(string) {
	return string.split('').reverse().join('');
};
