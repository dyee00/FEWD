// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<p>Wrap things in ca$h</p>
// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function(item) {

	$("#todo-column ul").append("<li>" + "<p>" + item + "<span>" + "</span>" + "</p>" + "</li>");
	$("#todo-column ul li").addClass("item todo");
	$("#todo-column ul li span").addClass("label").html("Mark as done");

};


// Move all items from "Todo" to "Done"

var completeAll = function() {

	$("#todo-column ul li").appendTo("#done-column ul");
	$("#done-column ul li span").addClass("label").html("Remove");

};

// Remove all items from "Done"

var clearAll = function() {

	$("#done-column li").remove();

};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];


var renderAllItems = function(itemsToRender) {

	var itemsToRender = i;
	for (var i = 0; i < items.length; i++ ) {
		$("#todo-column ul").append("<li>" + "<p>" + items[i] + "<span>" + "</span>" + "</li>");
		$("#todo-column ul li").addClass("item todo");
		$("#todo-column ul li span").addClass("label").html("Mark as done");
	};

};


// ----------------
// BONUS
// ----------------

// What does .eq() do? 
// .eq() = "selects an element with a specific index number"

// Remove a single item

var removeItem = function(itemNumber) {

	$("#done-column ul").find("li").eq(itemNumber).remove();

};


// Mark a single item as Done

var markAsDone = function(itemNumber) {

	$("#todo-column ul").find("li").eq(itemNumber).appendTo("#done-column ul");
	$("#done-column ul li span").addClass("label").html("Remove");

};







