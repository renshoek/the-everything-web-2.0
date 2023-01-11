 // Get a reference to the button and the pop-up window
  const buttonwin = document.getElementById("popupbutton");
  const popupwin = document.getElementById("popupwin");

  // Add an event listener to the button that shows the pop-up when clicked
  let clickCount = 0;
  buttonwin.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 6) {
      popupwin.style.display = "block";
    }
  });