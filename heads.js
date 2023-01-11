var heads = 0;
var tails = 0;
var red = 0;

function click() {
    x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        flip("heads");
    } else {
        flip("tails");
    } 

    var things = ['⬛', '🟩', '🟨'];
    var thing = things[Math.floor(Math.random() * things.length)];
    var thing2 = things[Math.floor(Math.random() * things.length)];
    var thing3 = things[Math.floor(Math.random() * things.length)];
    document.getElementById("RPS").innerHTML = (thing + thing2 + thing3);

};

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};

setInterval(click, 1100);
