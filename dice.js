const dice = document.querySelector(".dice");
const dot = document.querySelector(".dot");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const background = document.querySelector(".background");
let currentFace = six;

function showFace(face) {
	face.classList.add("fadeIn");
	setTimeout(function () {
		face.classList.remove("fadeOut");
		face.classList.remove("hidden");
	}, 900);
}

function hideFace(face) {
	face.classList.add("fadeOut");
	setTimeout(function () {
		face.classList.remove("fadeIn");
		face.classList.add("hidden");
	}, 300);
}

function rollDice() {
	dice.classList.add("roll");
}

function stopRoll() {
	dice.classList.remove("roll");
}

function generateNum() {
	return Math.floor(Math.random() * 6) + 1;
}

dice.addEventListener("click", function () {
	const num = generateNum();
	switch (num) {
		case 1:
			hideFace(currentFace);
			rollDice();
			currentFace = dot;
			showFace(currentFace);
			break;
		case 2:
			hideFace(currentFace);
			rollDice();
			currentFace = two;
			showFace(currentFace);
			break;
		case 3:
			hideFace(currentFace);
			rollDice();
			currentFace = three;
			showFace(currentFace);
			break;
		case 4:
			hideFace(currentFace);
			rollDice();
			currentFace = four;
			showFace(currentFace);
			break;
		case 5:
			hideFace(currentFace);
			rollDice();
			currentFace = five;
			showFace(currentFace);
			break;
		case 6:
			hideFace(currentFace);
			rollDice();
			currentFace = six;
			showFace(currentFace);
			break;
	}
	setTimeout(stopRoll, 1000);
});
