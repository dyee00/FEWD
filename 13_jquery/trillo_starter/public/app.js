// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<li>Wrap things in ca$h</li>
// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<li>Learn JavaScript</li>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function(item) {

	$("#todo-column ul").append("<li>" + item + "<span>Mark as done</span>" + "</li>");
	$("#todo-column ul li span").addClass("label");

};


// Move all items from "Todo" to "Done"

var completeAll = function() {

	$("#todo-column ul li").appendTo("#done-column ul");
	$("#done-column ul li span").html("Remove");
	$("#done-column ul li span").addClass("label");

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

	$("#todo-column ul").append("<li>" + items[0] + "<span>Mark as done</span>" + "</li>");
	$("#todo-column ul").append("<li>" + items[1] + "<span>Mark as done</span>" + "</li>");
	$("#todo-column ul").append("<li>" + items[2] + "<span>Mark as done</span>" + "</li>");
	$("#todo-column ul li span").addClass("label");

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
	$("#done-column ul li span").html("Remove");
	$("#done-column ul li span").addClass("label");
};







