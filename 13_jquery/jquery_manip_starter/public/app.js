// 1.Select the first element in the left side div's ul and move it so that it is the first element of the right side div's ul

$(".left ul :first-child").prependTo(".right ul");

// 2.Select all of the child elements of the left side div and change their font to be Helvetica
$(".left ul").children().css("font-family", "helvetica");

// 3.Add a class of excited to all of the li tags in the right div
$(".right li").addClass("excited");

//4.Find the source of the img in the left side div and set it to be the background of the body then remove the image from the div
//  do this by accessing the parent div of the image
$(".left").find("img").attr("src");
$("body").css("background-image", "url(http://placecage.com/200/200)");
$(".left img:last-child").remove();

// 5.Change the color of the body's text to be lavenderblush
$("body").css("color", "lavenderblush");

// 6.remove the class of list from all uls and add a 2px solid papayawhip border
$("ul").removeClass("list");
$("ul").css("border", "2px solid papayawhip");

// 7.create a new div with an id of swag and a class of circle and append it to the body
$("body").append("<div id=\"swag\"></div>");
$("#swag").append("<div class=\"circle\"></div>");

// 8.find the width and height of the left and right side divs and add a h1 tag to the top of each div where the text reads whatever the width and height of the div are
$(".left").width();
$(".left").height();
$(".right").width();
$(".right").height();
$(".left").prepend("<h1>The width is 290 and the height is 300</h1>");
$(".right").prepend("<h1>The width is 290 and the height is 300</h1>");
