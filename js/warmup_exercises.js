"use strict"

//re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }
for (let i = 20; 1>= 0; i--)
	console.log(i)


//Add ‘strawberry’ to the beginning, middle, and end of the array.
let fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

fruits.unshift("strawberry")
fruits.push("strawberry")
fruits.splice(4, 0, "strawberry")
console.log(fruits)