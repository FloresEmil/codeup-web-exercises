$('.movieCard').on('click',function(event){
	console.log(this);
})

setTimeout((e)=>{
	$('#loadingScreen').css('display','none');
},1500);


componentDidMount() {
	fetch("https://luminous-pointed-aphid.glitch.me/movies")
		.then(res => res.json())
		.then(
			result => {
				this.setState({
					data: result
				});
			},
			error => {
				console.log(error);
			}
		);
}








// async function loadNames() {
// 	const response = await fetch('https://luminous-pointed-aphid.glitch.me/movies', {
// 		method: 'GET'
// 	});
// 	const names = await response.json();
// 	console.log(names);
// 	// logs [{ name: 'Joker'}, { name: 'Batman' }]
// }
// loadNames();


// function fetchPost(_title, _rating){
// 	let movie = {
// 		"title": _title,
// 		"rating": _rating
// 	}
// 	fetch("https://luminous-pointed-aphid.glitch.me/movies",{
// 		method:"POST",
// 		body:JSON.stringify(movie)})
// 		.then(res=>res.json())
// 		.then(res2=>console.log(res2));
// }
//
// function fetchDelete(idToDelete){
// 	fetch(`https://luminous-pointed-aphid.glitch.me/movies/${idToDelete}`,{method:"DELETE"})
// 		.then(res=>res.json())
// 		.then(res=>console.log(res));
// }
//
// fetchPost("Sunrise",1);
// fetchGet();

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