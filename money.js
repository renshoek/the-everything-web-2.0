setInterval(display, 500);
setInterval(sharkAdd(2), 1000);


function display() {
        var string = "💵 ";
        var message = document.getElementById("money");
        message.innerHTML += string.repeat(2);
    }
    

var money = [0];
var sharkAmountDisplay = document.getElementById('amount');

sharkAmountDisplay.innerHTML = money[0];


function sharkAdd(value) {

    money[0] = money[0] + value;

    sharkAmountDisplay.innerHTML = "You recieved $" + money[0];
};

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};



