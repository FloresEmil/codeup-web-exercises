"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/**function analyseColor(input){
	if (input === "green") {
		return ("Green is the color of life");
	} else if (input === "yellow") {
		return "Yellow is a nice color"
	} else {
		return "I don't know that color"
	}
}
 console.log(analyseColor("yellow"))
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let randomColor = color[Math.floor(Math.random() * color.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyseColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyseColor(color){
	switch (color){
		case "red":
			alert("Blood is red");
			break;
		case "green":
			alert("Grass is green");
			break;
		case "yellow":
			alert("the sun is yellow");
			break;
		case "blue":
			alert("the sky is blue");
			break;
		case"orange":
			alert("oranges are orange");
			break;
		case "violet":
			alert("my favorite shirt is violet");
			break;
		case "indigo":
			alert("idk how indigo looks like");
			break;
		default:
			alert("I don't know that color")
	}
}
//	console.log(analyseColor(randomColor))


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let whatColor = (prompt("Give me a color"))
whatColor = analyseColor(whatColor)


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (x , y) {
	if (x == 0) {
		return y;
	} else if (x == 1) {
		return y - (y * .10);
	} else if (x == 2) {
		return y - (y * .25);
	} else if (x == 3) {
		return y - (y * .35);
	} else if (x == 4) {
		return y / 2;
	} else {
		return y - y;
	}
}

console.log(calculateTotal(4,100))
console.log(calculateTotal(3, 100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
var totalprice = parseFloat(prompt("Thank you for shopping at Wal-Mart! How much was your bill today?"));
var discountprice = calculateTotal(luckyNumber, totalprice);

if (luckyNumber == 0) {
	alert("I'm sorry your lucky number was " + luckyNumber + " meaning you did not get a discount today! Your total is $" + totalprice);
} else if (luckyNumber == 1) {
	alert("Congratulations! Your lucky number was " + luckyNumber + " earning you a discount. Instead of paying $" + totalprice + " , I'm happy to say your discounted total today is $" + discountprice.toFixed(2));
} else if (luckyNumber == 2) {
	alert("Congratulations! Your lucky number was " + luckyNumber + " earning you a discount. Instead of paying $" + totalprice + " , I'm happy to say your discounted total today is $" + discountprice.toFixed(2));
} else if (luckyNumber == 3) {
	alert("Congratulations! Your lucky number was " + luckyNumber + " earning you a discount. Instead of paying $" + totalprice + " , I'm happy to say your discounted total today is $" + discountprice.toFixed(2));
} else if (luckyNumber == 4) {
	alert("Congratulations! Your lucky number was " + luckyNumber + " earning you a discount. Instead of paying $" + totalprice + " , I'm happy to say your discounted total today is $" + discountprice.toFixed(2));
} else if (luckyNumber == 5) {
	alert("Congratulations! Your lucky number was " + luckyNumber + " earning you a discount. Instead of paying $" + totalprice + " , I'm happy to say your discounted total today is $" + discountprice.toFixed(2));
}

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */