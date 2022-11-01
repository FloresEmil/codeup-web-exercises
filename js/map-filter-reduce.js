"use strict"

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let theLanguages = users.filter(function (lan) {
	return lan.languages.length >= 3
})
console.log(theLanguages)

//Use .map to create an array of strings where each element is a user's email address
let theEmails = users.map(function (n) {
	return n.email
})
console.log(theEmails)

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let averageExp = users.reduce(function (previousValue, currentValue) {
	return previousValue + currentValue.yearsOfExperience
}, 0)
console.log("total years summed:" + " " + averageExp)
console.log(`average exp math: ${averageExp / users.length}`)


//Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce(function (previousValuea, currentValue) {
	if (currentValue.email.length > previousValuea.length) {
		previousValuea = currentValue.email
	}
	return previousValuea;
}, "")
console.log(longestEmail)


//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let instructorsAsStrings = users.reduce(function (previousValue, currentValue, currentIndex, myArray){
	let punctuation = ","
	if (currentIndex === myArray.length - 1){
		punctuation = "."
	}
	return previousValue + currentValue.name + punctuation + " "
}, "Your instructors are: ")

console.log(instructorsAsStrings)


//Bonus
// Use .reduce to get the unique list of languages from the list of users.