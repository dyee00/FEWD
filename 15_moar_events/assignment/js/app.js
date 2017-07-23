console.log("This is working!");


var enterCity = function(city) {
	
if(city === "Austin") {
	$("body").removeClass();
	$("body").addClass("austin");
}else if (city === "ATX") {
	$("body").removeClass();
	$("body").addClass("austin");
}else if (city === "Los Angeles") {
	$("body").removeClass();
	$("body").addClass("la");
}else if (city === "LA") {
	$("body").removeClass();
	$("body").addClass("la");
}else if (city === "LAX") {
	$("body").removeClass();
	$("body").addClass("la");
}else if (city === "New York") {
	$("body").removeClass();
	$("body").addClass("nyc");
}else if (city === "New York City") {
	$("body").removeClass();
	$("body").addClass("nyc");
}else if (city === "NYC") {
	$("body").removeClass();
	$("body").addClass("nyc");
}else if (city === "San Francisco") {
	$("body").removeClass();
	$("body").addClass("sf");
}else if (city === "SF") {
	$("body").removeClass();
	$("body").addClass("sf");
}else if (city === "Bay Area") {
	$("body").removeClass();
	$("body").addClass("sf");
}else if (city === "Sydney") {
	$("body").removeClass();
	$("body").addClass("sydney");
}else if (city === "SYD") {
	$("body").removeClass();
	$("body").addClass("sf");
}

};



//===  Events ====


$("#submit-btn").on("click", function(event) { 
	var userInput = $("#city-type").val()

	$("#city-type").val(""); // restores placeholder text
	event.preventDefault();	// prevents page refresh
	
	enterCity(userInput); 

}); 		

 


