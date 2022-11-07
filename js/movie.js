"use strict"

// Controls the timer to allow 'animation' of loading screen; displayed before cards, removed after cards appear
setTimeout((e)=>{
	$('#loadingScreen').remove();               // Remove 'loading screen'
	$('.movieCard').css('display','flex');      // Hide defualt card template
	$('#card').css("display","none");           // Show non-template cards (movies in database)

	// Get && Start Point
	let results = fetch("https://shrub-wooden-harrier.glitch.me/movies",{method:"GET"})
		.then(res=>res.json())
		.then(res=>{generateCards(res)});
},1500);

//  Writes new entries into JSON database
function fetchPost(_title, _rating, _desc, _genre){
	fetch("https://shrub-wooden-harrier.glitch.me/movies",{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			title: _title,
			desc: _desc,
			rating: _rating,
			genre: _genre,
		})});
}

// Takes in a number and deletes the posting with that ID
function fetchDelete(postNumber){
	fetch(`https://shrub-wooden-harrier.glitch.me/movies/${postNumber}`,{
		method:"DELETE",
		headers: {
			'Content-Type': 'application/json',
		}
	});
}

// Takes in a number and content -> Then adds/overwrites the data on the post whose ID matches given number
function fetchPatch(postNumber, content){
	fetch(`https://shrub-wooden-harrier.glitch.me/movies/${postNumber}`,{
		method:"PATCH",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(content)});
}

function sampleMovies(){
	fetchPost("Black Adam",5,"In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam.","Action, Adventure, Superhero")
	fetchPost("Dawn of the Dead",5,"As hordes of zombies swarm over the U.S., the terrified populace tries everything in their power to escape the attack of the undead, but neither cities nor the countryside prove safe.","Horror, Zombie")
	fetchPost("Minions: The Rise of Gru",5,"In the 1970s, young Gru tries to join a group of supervillains called the Vicious 6 after they oust their leader","Comedy, Adventure, Family")
}


// Generate && Populate Cards
function generateCards(array){
	// sampleMovies();
	$('#card').css('display','none');
	// Create new cards, up to current number of movies in database
	for(let i=0; i<array.length; i++){
		let cloneCard = document.getElementById(`card`).cloneNode(true);
		// cloneCard.id = `card${i}`;
		cloneCard.id = array[i].id;
		document.getElementById('cardHolder').appendChild(cloneCard);
		$(cloneCard).css("display","block");

		$(cloneCard).find('.btn-danger').on('click',()=>{
			console.log(cloneCard);
			let num = $(cloneCard)[0].id;
			console.log(num);
			$(cloneCard).remove();
			fetchDelete(num);
		})
	}
	// Populate text in cards for movies
	for (let i=0; i<array.length; i++){
		$(`#${array[i].id}`).find('h5.card-title')[0].innerHTML = array[i].title;
		cardDesc = array[i].desc ? array[i].desc : "NO DESCRIPTION";
		$(`#${array[i].id}`).find('p.card-text')[0].innerHTML = cardDesc;
		cardGenre = array[i].genre ? array[i].genre : "NO GENRE";
		$(`#${array[i].id}`).find('div.card-footer')[0].innerHTML = cardGenre;
	}
}

$(document).keydown((event)=>{
	if (event.key){
		if (event.key === "Enter"){
			let title = $('#movieTitle')[0].value;
			$('#movieTitle')[0].value = ""
			let description = $('#movieDesc')[0].value;
			$('#movieDesc')[0].value = ""
			let genre = $('#movieGenre')[0].value;
			$('#movieGenre')[0].value = ""
			fetchPost(title,rating='?',description,genre);
		}
	}
});









// On page load:
//     Display a "loading..." message
//     Make an AJAX request to get a listing of all the movies
//     When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

// Allow users to add new movies
//     Create a form for adding a new movie that has fields for the movie's title and rating
//     When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

// Allow users to edit existing movies
//     Give users the option to edit an existing movie
//     A form should be pre-populated with the selected movie's details
//     Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// Delete movies
//     Each movie should have a "delete" button
//     When this button is clicked, your javascript should send a DELETE request

// Bonuses
//     Add a disabled attribute to buttons while their corresponding ajax request is still pending.
//     Show a loading animation instead of just text that says "loading...".
//     Use modals for the creating and editing movie forms.
//     Add a genre property to every movie.
//     Allow users to sort the movies by rating, title, or genre (if you have it).
//     Allow users to search through the movies by rating, title, or genre (if you have it).
//     Use a free movie API like OMDB to include extra info or render movie posters.