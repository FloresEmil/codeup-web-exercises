"use strict";

//reate a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function multiplication(num){
	for (let i = 1; i <= 10; i++){
		console.log(`${num} x ${i} = ${num * i}`);
	}
}
console.log(multiplication(7))



//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
for(let i = 1; i <= 10; i++){
	let randomNum = Math.floor(Math.random() * (200 - 20)) + 20;

	if (randomNum % 2 === 0) {
		console.log("even number " + randomNum);
	} else {
		console.log("odd number " + randomNum)
	}
}




//Create a for loop that uses console.log to create the output shown below.
let str = "";

	for (let i = 1; i <= 9; i++) {

	for (let j = 1; j <= i; j++) {
		str += i;
	}
	str += "\n";
}
console.log(str);

//Create a for loop that uses console.log to create the output shown below.
for (let i = 100; i > 0; i = i - 5){
	console.log(i)
}