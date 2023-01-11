document.addEventListener('mousemove', function(event) {
  var x = event.pageX;
  var y = event.pageY;

  // Set the fake cursor to be 20px to the right of the user's cursor
  var fakeCursor = document.getElementById('fake-cursor');
  fakeCursor.style.left = x + 0 + 'px';
  fakeCursor.style.top = y + 'px';

  // Move the fake cursor in a random direction
  setInterval(function() {
    var randX = Math.random() * 100 - 50;
    var randY = Math.random() * 100 - 50;
    fakeCursor.style.left = x + randX + 'px';
    fakeCursor.style.top = y + randY + 'px';
  }, 1000);
});

// Keep the fake cursor visible when the user scrolls
window.addEventListener('scroll', function() {
  var fakeCursor = document.getElementById('fake-cursor');
  fakeCursor.style.top = fakeCursor.offsetTop - window.scrollY + 'px';
});

document.addEventListener('mousemove', function(event) {
  var x = event.pageX;
  var y = event.pageY;

  // Set the fake cursor to be 20px to the right of the user's cursor
  var fakeCursor = document.getElementById('fake-cursor2');
  fakeCursor.style.left = x + 0 + 'px';
  fakeCursor.style.top = y + 'px';

  // Move the fake cursor in a random direction
  setInterval(function() {
    var randX = Math.random() * 100 - 50;
    var randY = Math.random() * 100 - 50;
    fakeCursor.style.left = x + randX + 'px';
    fakeCursor.style.top = y + randY + 'px';
  }, 1000);
});

// Keep the fake cursor visible when the user scrolls
window.addEventListener('scroll', function() {
  var fakeCursor = document.getElementById('fake-cursor2');
  fakeCursor.style.top = fakeCursor.offsetTop - window.scrollY + 'px';
});

document.addEventListener('mousemove', function(event) {
  var x = event.pageX;
  var y = event.pageY;

  // Set the fake cursor to be 20px to the right of the user's cursor
  var fakeCursor = document.getElementById('fake-cursor3');
  fakeCursor.style.left = x + 0 + 'px';
  fakeCursor.style.top = y + 'px';

  // Move the fake cursor in a random direction
  setInterval(function() {
    var randX = Math.random() * 100 - 50;
    var randY = Math.random() * 100 - 50;
    fakeCursor.style.left = x + randX + 'px';
    fakeCursor.style.top = y + randY + 'px';
  }, 2000);
});

// Keep the fake cursor visible when the user scrolls
window.addEventListener('scroll', function() {
  var fakeCursor = document.getElementById('fake-cursor3');
  fakeCursor.style.top = fakeCursor.offsetTop - window.scrollY + 'px';
});