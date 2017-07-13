
var expressGratitude = function(name) {
	console.log("You have saved our lives, " + name);
	console.log("We are eternally grateful");
};


var join = function(firstWord, secondWord) {
	var joinedWord = firstWord + " " + secondWord;

	return joinedWord;
};

//* Write a function `sumOfThree` that will accept three numbers as input 
//  arguments, and return their sum

var sumOfThree = function(firstNum, secondNum, thirdNum){
	var total = firstNum + secondNum + thirdNum;

	return total;
};

//* Write a function `productOfThree` that will accept three numbers as input
//  arguments, and return their product

var productOfThree = function(firstNum, secondNum, thirdNum) {
	var product = firstNum * secondNum * thirdNum;

	return product;
};