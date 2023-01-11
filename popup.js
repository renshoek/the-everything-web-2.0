// Function that shows the pop up message at random intervals
function showPopUp() {
  if (Math.random() < 0.5) {
    // Show the pop up message
    document.getElementById("popup").style.display = "block";
  }
}

// Call the showPopUp() function every 5 seconds
setInterval(showPopUp, 15000);

// Attach a click event listener to the pop up
popup.addEventListener("click", function() {
  // Hide the pop up when it is clicked
  popup.style.display = "none";
});