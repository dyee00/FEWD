var paragraph = $("<p>");
paragraph.html("I am a lonely paragraph.");
paragraph.appendTo("body");

var firstListItem = $("<li>");
firstListItem.html("First List Item (NEW)");
firstListItem.appendTo(".first");

var secondListItem = $("<li>");
secondListItem.html("Second List Item (NEW)");
secondListItem.prependTo(".second");


var circle = $("<div>");
circle.addClass("circle");
circle.appendTo(".circles");