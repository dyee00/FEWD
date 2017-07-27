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


$(".new-tweed-text").on("input", function() {
  var userInput = $(".new-tweed-text").val();

  	if (userInput.length > 140) { // if userInput is greater than # characters
  	  var trimmedInput = userInput.substring(0, 140); // assures up to the # of character allowed
  	  
  	  $(".new-tweed-text").val(trimmedInput); // limits textbox to max characters stated

  	}
});





// === menu ====


$(".navigation-icon").click(function() {
  var navigation = $(".navigation");

  navigation.toggleClass("navigation-enabled");
});















