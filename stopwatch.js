// Set up the stopwatch
var time2 = 0;
var running = 0;
var stopwatch2;

// Function to start the stopwatch
function start() {
  if (running == 0) {
    running = 1;
    stopwatch2 = setInterval(increment, 10);
  }
}

// Function to increment the stopwatch
function increment() {
  if (running == 1) {
    time++;
    var minutes = Math.floor(time/100/60);
    var seconds = Math.floor(time/100);
    var tenths = time % 100;

    // Add leading zeros if necessary
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (tenths < 10) {
      tenths = "0" + tenths;
    }

    // Update the stopwatch time
    document.getElementById("time2").innerHTML = minutes + ":" + seconds + ":" + tenths;
  }
}

// Start the stopwatch when the page loads
start();