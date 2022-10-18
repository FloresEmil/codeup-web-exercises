
"use strict"

function renderCoffee(coffee) {
	var html = '<div class="coffee">';
	// html += '<h1>' + coffee.id + '</h1>';
	html += '<h1>' + coffee.name + '</h1>';
	html += '<p>' + coffee.roast + " roast" + '</p>';
	html += '</div>';

	return html;
}

function renderCoffees(coffees) {
	var html = '';
	for(var i = 0; i <= coffees.length - 1; i++) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	coffees.forEach(function(coffee) {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		}
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}


//local storage accepts a string, so we used the following to convert
// the user input objects as a string that can be stored locally.  The string is
//then parsed to store it withing the array of coffees.


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];


//Sets the parsed item as to the coffeeList in order to display the addition on the page.


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


let userInput = document.getElementById("search")
userInput.addEventListener('keyup', filterCoffees)

function filterCoffees(e) {
	e.preventDefault();
	var result = userInput.value;

	console.log(result);

	var filteredCoffees = [];
	coffees.forEach(function(coffee) {
		if (coffee.name.toLowerCase().includes(result.toLowerCase())){
			console.log(result)
			filteredCoffees.push(coffee);
		}
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}




//sticky navbar

