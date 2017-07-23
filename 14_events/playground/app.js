console.log("loaded");

// #1 Check out this potato generator

$(".potato-generator").click(function() {
	var potatoList = $(".potatoes"); // finds potatoes class

	var newPotato = $("<li>"); // turns "newPotato" to <li> list item
	newPotato.html("Potato"); // newPotato - adds text of ("Potato") to new <li>

	newPotato.appendTo(potatoList); // newPotato now becoes potatoList
});


// #2 Disappear

$(".disappear").click(function() {
	$(this).remove();
});


// #3 Type something in and press the button.

$(".alert-button").click(function() { // button input - sends user text to form when button is pressed
	var userInput = $(".alert-input").val(); // input type - grabs user text and puts in "userInput" 
	alert(userInput); // pops up window with user text
});



// #4 A slightly more robust version. This is a form.

$(".alert-form").submit(function(event) { // sends when enter is hit instead of pressing button
	event.preventDefault(); // event prevents page from refreshing after sending form

	var userInput = $(".alert-form-input").val();
	alert(userInput);
});


// #5 Golden Egg - Whatever you do, do NOT change the value in this input.

$("#change-input").change(function() {
	alert("Oh noooo, you touched the golden egg! Now the big boulder will squish you.");
});



//Practice Time 

// #1 - pokemons

$(".pokemon").click(function() {
	var pokemon = $(this); // which item is clicked

	var pokemonName = pokemon.html(); //what text is inside

	console.log(pokemonName); // prints
});


// #2 pokemon - When I click one, console log the pokemon's name

$(".alert-button").click(function() { // sends user text to form when button is pressed
	var userInput = $(".alert-input").val(); // grabs user text and puts in "userInput" 
	alert(userInput); // pops up window with user text
});


// #3 When the button's pushed, log the value in the input in ALL CAPITAL LETTERS

$(".capital-button").click(function() { 

	var userInput = $("#capital-input").val();

	var capitalizedInput = userInput.toUpperCase(); // turns user input to all caps & stores in a new variable

	console.log(capitalizedInput);

});



















