"use strict"

// $('.invisible').css('visibility', "hidden")




$('.switch').on('click', function(e) {
	e.preventDefault();
	$('.invisible').toggle(); //just the toggle class makes them hidden
});

$(".invisible").click(function (e){
	e.preventDefault();
	$(".invisible").css("background-color", "yellow");
})