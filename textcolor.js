setInterval(setColor, 1230);

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  document.documentElement.style.setProperty('--shadowColor', getColor());
}

setColor();

document.body.addEventListener('mouseover', function (evt) {
if (evt.target.tagName === 'H1') {
    setColor();
}
}, false);

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  document.documentElement.style.setProperty('--shadowColor', getColor());
}

setColor();

document.body.addEventListener('mouseover', function (evt) {
if (evt.target.tagName === 'H2') {
    setColor();
}
}, false);

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  document.documentElement.style.setProperty('--shadowColor', getColor());
}

setColor();

document.body.addEventListener('mouseover', function (evt) {
if (evt.target.tagName === 'H3') {
    setColor();
}
}, false);

function setColor() {
  document.documentElement.style.setProperty('--shadowColor', getColor());
}

setColor();

document.body.addEventListener('mouseover', function (evt) {
if (evt.target.tagName === 'P') {
    setColor();
}
}, false);

