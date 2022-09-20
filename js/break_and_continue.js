"use strict"

//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

let userNumber = prompt("give me a number between 1 - 50");

while(true){
	if (userNumber % 2 !== 0 && userNumber < 50 && userNumber > 1){
		break
	}
	userNumber = prompt("give me a number between 1 - 50")
}

//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
console.log(`number to skip is ${userNumber}`)

for(let i = 0; i <= 50; i++){
	if (userNumber == i) {
		console.log(`yikes skipping number ${userNumber}`);
		continue
	}
	console.log(i)
}