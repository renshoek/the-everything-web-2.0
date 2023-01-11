// Generate a random time when the page first loads
var date = new Date();
var hours = Math.floor(Math.random() * 12);
var minutes = Math.floor(Math.random() * 60);
var seconds = Math.floor(Math.random() * 60);
date.setHours(hours);
date.setMinutes(minutes);
date.setSeconds(seconds);

function clock() {
  // Use the current time to update the clock hands
  var hours = date.getHours() % 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var hoursDegrees = (hours * 30) + (minutes / 2);
  var minutesDegrees = (minutes * 6) + (seconds / 10);
  var secondsDegrees = seconds * 6;

  document.getElementById("hours").style.transform = "rotate(" + hoursDegrees + "deg)";
  document.getElementById("minutes").style.transform = "rotate(" + minutesDegrees + "deg)";
  document.getElementById("seconds").style.transform = "rotate(" + secondsDegrees + "deg)";

  // Increment the time by one second
  date.setSeconds(date.getSeconds() + 1);
}

// Call the clock function every second
setInterval(clock, 1);

// Attach a click event listener to the resetclock button
document.getElementById("resetclock").addEventListener("click", function() {
  // Update the clock to the current time
  clock();

  // Start updating the clock hands again
  setInterval(clock, 1);
});