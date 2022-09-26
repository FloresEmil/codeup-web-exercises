"use strict"

//Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			count++;
		}
	}
	return count;
}

console.log(isEven())





// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]


