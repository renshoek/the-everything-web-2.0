setInterval(setColor, 9010);

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  document.documentElement.style.setProperty('--shadowColor2', getColor());
}