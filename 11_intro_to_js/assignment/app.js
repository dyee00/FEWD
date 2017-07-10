/* assignment */

var price = prompt("What is the price of the product?");
var items = prompt("How many items of the product are in the inventory?");
var userCash = prompt("How much money do you have?");
var userItem = prompt("How many items do you wish to buy?");

if (userCash >= price && items > 0) {
	console.log("Purchase complete");
} else if (userCash < price && items > 0) {
	console.log("Not enough money");
} else if (userCash >= price && items == 0) {
	console.log("Not enough inventory");
}

