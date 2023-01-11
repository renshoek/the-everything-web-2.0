var width = 8;
function move2() {
  var elem = document.getElementById("barStatus");   
  
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      //clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}