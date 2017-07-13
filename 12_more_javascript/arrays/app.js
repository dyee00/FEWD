var colors=["red", "blue", "yellow","green"];

// Print the first color 
console.log([0]);

// Print the last color
console.log([3]);

// Print how many colors in the array
console.log(colors.length);


// To print the last item if you do not know what the last item is
console.log(colors[ colors.length - 1 ]);

//Print a sentence for each color in your array - like
// "I like the color blue.", "I like the color orange"...

console.log("I really like " + colors [0]);
console.log("I really like " + colors [1]);
console.log("I really like " + colors [2]);
console.log("I really like " + colors [3]);

// shortcut for the above using "for"


for(var number = 0; number < colors.length; number++) {
	console.log("I really like " + colors[number]);
}

// same as above except number is replaced with "i", which stands for "index"
for(var i = 0; i < colors.length; i++) {
	console.log("I really like " + colors[i]);
}


