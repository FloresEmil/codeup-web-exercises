"use strict";


let cursor = 0;
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

document.addEventListener('keydown', (e) => {
	cursor = (e.keyCode === konamiCode[cursor]) ? cursor + 1 : 0;
	if (cursor === konamiCode.length) {
		return alert("Congrats you got 30 more lives you cheater");
	}
});