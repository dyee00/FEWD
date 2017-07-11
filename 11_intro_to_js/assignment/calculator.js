/* Calculator */ 

var firstNum = parseInt(prompt("Please provide a number"));
var secondNum = parseInt(prompt("Please provide another number"));
var mathOp = prompt("What mathematical operation would you like to perform: add, subtract, multiply, divide or exponent?")


if (mathOp === "add") {
	console.log(firstNum + secondNum);
} else if (mathOp === "subtract") {
	console.log(firstNum - secondNum);
} else if (mathOp === "multiply") {
	console.log(firstNum * secondNum); 
} else if (mathOp === "divide") {
	console.log(firstNum / secondNum);
} else if (mathOp === "exponent") {
	console.log(Math.pow(firstNum,secondNum));
}	





