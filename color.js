function getRandomColor() { //To give me a new rgb number everytime
    return (Math.floor(Math.random() * (255 - 10)) + 10);
}

function getColor() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

(function changeColor(){
    setInterval((() => document.body.style.background = getColor()), 
        5500);
})();


let button = document.querySelectorAll('div')[0];

function RBC (e) {
  button.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

button.addEventListener("", RBC);
window.onload = RBC();


var random = Math.floor( (Math.random() * 100) + 1 );

function xd()
{
var random1= Math.floor( (Math.random() * 255) + 1 );
var random2= Math.floor( (Math.random() * 255) + 1 );
var random3= Math.floor( (Math.random() * 255) + 1 );

document.getElementById("xd").style.backgroundColor = "rgb("+random1+", "+random2+", "+random3+")";
}

setInterval(RBC, 4000);
setInterval(xd, 750);