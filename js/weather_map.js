(function () {
	"use strict";
//start of cards with info
	$.get("http://api.openweathermap.org/data/2.5/forecast", {
		APPID: weatherKey,
		q: "Houston",
		units: "imperial"

	}).done(function (data) {
		console.log('5 day forecast', data);
		$("#city").append(`CURRENT CITY : <strong>${data.city.name.toUpperCase()}</strong>`)
		for (let i = 0; i < data.list.length; i = i + 8) {
			$("#insert-card").append(`
        <div class="card col-2 ">
            <div class="cardHeader pt-4"><p>${data.list[i].dt_txt.slice(0, 10)}</p></div>
            <hr>
            <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F</strong> / Max : <strong>${Math.round(data.list[i].main.temp_max)} °F</strong></p>
            <strong>${data.list[i].weather[0].main.toUpperCase()}</strong><br>
            ${data.list[i].weather[0].description.toUpperCase()}<br>
            <hr>
            <div class="humidity "><p>Humidity: <strong>${data.list[i].main.humidity} %</strong></p></div>
            <hr>
            <div class="wind"><p>Wind: <strong>${Math.round(data.list[i].wind.speed)} MPH</strong></p></div>
            <hr>
            <div class="pressure"><p>Pressure: <strong>${data.list[i].main.pressure}</strong></p></div>
        </div>`);
		}

//this updates the cards
		function updateCards(lat, lng) {
			$.get("http://api.openweathermap.org/data/2.5/forecast", {
				APPID: weatherKey,
				lat: lat,
				lon: lng,
				units: "imperial"
			}).done(function (data) {
				//<-reset previous city
				$("#city").text("");
				//<--reset weather cards
				$("#insert-card").text("");
				$("#city").append(`CURRENT CITY : <strong>${data.city.name.toUpperCase()}</strong>`)
				for (let i = 0; i < data.list.length; i = i + 8) {
					$("#insert-card").append(`
      <div class="card col-2 shadow-lg">
            <div class="cardHeader pt-4"><p>${data.list[i].dt_txt.slice(0, 10)}</p></div>
            <hr>
           <div class="temperature"><p>Temperature<br> Min : <strong>${Math.round(data.list[i].main.temp_min)} °F</strong> / Max : <strong>${Math.round(data.list[i].main.temp_max)} °F</strong></p>
           <strong>${data.list[i].weather[0].main.toUpperCase()}</strong><br>
            ${data.list[i].weather[0].description.toUpperCase()}<br>
            <img class="image" src = "http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt='Weather icon'></div>
            <hr>
            <div class="humidity "><p>Humidity: <strong>${data.list[i].main.humidity} %</strong></p></div>
            <hr>
            <div class="wind"><p>Wind: <strong>${Math.round(data.list[i].wind.speed)} MPH</strong></p></div>
            <hr>
            <div class="pressure"><p>Pressure: <strong>${data.list[i].main.pressure}</strong></p></div>
        </div>`);
				}
			})
		}

//start of map
		mapboxgl.accessToken = mapboxToken;
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			zoom: 10,
			//whe the map starts
			center: ([-95.37669446417962, 29.758781183441947])
		});

		//marker for the map
		const marker = new mapboxgl.Marker({
			draggable: true
		})
			//this is where the marker starts
			.setLngLat([-95.37669446417962, 29.758781183441947])
			.addTo(map);

//when drag it updates the card
		function onDragEnd() {
			const lngLat = marker.getLngLat();

			updateCards(lngLat.lat, lngLat.lng)
		}

		marker.on('dragend', onDragEnd);



		//search function
		$("#search-btn").click(function (e) {
			e.preventDefault();
			geocode($("#input").val(), mapboxgl.accessToken).then(function (result) {

				const lat = result[1]
				const lng = result[0]
				updateCards(lat, lng)
				map.flyTo({center: result})

				new mapboxgl.Marker().setLngLat(result).addTo(map);
			})
		});
	});
})();