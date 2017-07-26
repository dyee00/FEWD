console.log("this works");

// When I click the Tweed button, I want my Tweed to appear at the top of my activity

$(".new-tweed-button").click(function() {
	var userInput = $(".new-tweed-text").val();

	// I shouldn't be able to make empty Tweeds

	if (userInput) { // prevents adding new line if no text is entered
		createTweed(userInput);
	}

	$(".new-tweed-text").val("")

}); 


var createTweed = function(text) {

	 var tweed = $("<div>"); 
	 var tweedText = $("<p>"); 
	 var tweedDelete = $("<span>"); 

	 tweed.addClass("tweed"); 
	 tweedText.addClass("tweed-text");
	 tweedDelete.addClass("delete-tweed");

	 tweedText.html(text);
	 tweedDelete.html("&times;");

	 tweed.append(tweedText).append(tweedDelete);

	 tweed.prependTo(".tweeds");

};

// I shouldn't be able to type more than 140 characters

$(".new-tweed-text").keypress(function(event) {
  var userInput = $(".new-tweed-text").val();

  if (userInput.length > 5) {
    event.preventDefault();
  } // needs firefox fix
});


// === menu ====

$(".navigation-icon").click(function () {
	$("nav").toggleClass("navigation-enabled");

	if().addClass("background", "#444");

	

});





















