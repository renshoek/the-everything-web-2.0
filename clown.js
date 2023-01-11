// ducktype check for firefox browser
const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

//array of nodes for the ring portal
var ring = [];
ring.push(document.getElementById("mirrortop"));
ring.push(document.getElementById("mirrorbottom"));

// array of nodes for all nodes that need changing when ring portal moved
var movingParts = [];
movingParts.push(document.getElementById("mirrortop"));
movingParts.push(document.getElementById("mirrorbottom"));
movingParts.push(document.getElementById("ghostvisible"));
movingParts.push(document.getElementById("clownvisible"));

// set up min and max constraints
const ringMax = 228;
const clipMax = 522;
const ringMin = -191;
const clipMin = 103;

//set up initial positions
let newPosition = 0;
let ghostOffset = 294;
let clownOffset = 294;
let amountMoved = 0;

//for each moving part, remove the animation css after it runs (release it for user interaction)

window.onload= function () {
  movingParts.forEach(element => {

    //turn off initial animation if in firefox
    if (isFirefox) {
      element.style.animation = "inherit";
      element.classList.remove('starting');
    } else {
      element.classList.add('starting');
      element.addEventListener("animationend", function () {
        element.classList.remove('starting');
      });
    }

  });

};


//when the ring is grabbed by user ...
ring.forEach(element => {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    element.ontouchstart = function (e) {
      e.stopPropagation();
      console.log('touched');
      amountMoved = 0;  //need to reset amount moved just in case user clicks and doesn't move the touch
      let initY = e.touches[0].pageY; //sets the initial click position

      //if the ring has been 'dragged' outside its bounds, reset all variables to the appropriate boundary
      if (newPosition > ringMax) {
        newPosition = ringMax;
        ghostOffset = clipMax;
        clownOffset = clipMax;
      } else if (newPosition < ringMin) {
        newPosition = ringMin;
        ghostOffset = clipMin;
        clownOffset = clipMin;
      }

      // when user drags ring ...
      document.body.ontouchmove = function (r) {
        amountMoved = r.touches[0].pageY - initY;
        console.log(r);

        // move the ring, but not beyond its boundaries
        ring.forEach(element => {
          if ((newPosition + amountMoved) > ringMax) {
            element.style.transform =
              "translateY(" + ringMax + "px)";
          } else if ((newPosition + amountMoved) < ringMin) {
            element.style.transform =
              "translateY(" + ringMin + "px)";
          } else {
            element.style.transform =
              "translateY(" + (newPosition + amountMoved) + "px)";
          }
        });

        //show hide ghost
        document.getElementById("ghostvisible").style.y =
          ghostOffset + amountMoved + "px";

        //show hide clown
        document.getElementById("clownvisible").style.height =
          clownOffset + amountMoved + "px";

      };

      // when the user releases touch button, set the position of all of the elements
      document.body.ontouchend = function () {
        newPosition += amountMoved;
        ghostOffset += amountMoved;
        clownOffset += amountMoved;
        document.body.style.cursor = "inherit"; //set cursor to grabbing

        document.body.ontouchmove = null;
        document.body.ontouchend = null;
      };
    };
  } else {
    element.onmousedown = function (e) {
      e.stopPropagation();
      amountMoved = 0;  //need to reset amount moved just in case user clicks and doesn't move the mouse
      let initY = e.pageY; //sets the initial click position

      //if the ring has been 'dragged' outside its bounds, reset all variables to the appropriate boundary
      if (newPosition > ringMax) {
        newPosition = ringMax;
        ghostOffset = clipMax;
        clownOffset = clipMax;
      } else if (newPosition < ringMin) {
        newPosition = ringMin;
        ghostOffset = clipMin;
        clownOffset = clipMin;
      }

      // when user drags ring ...
      document.body.onmousemove = function (r) {
        amountMoved = r.pageY - initY;

        // move the ring, but not beyond its boundaries
        ring.forEach(element => {
          if ((newPosition + amountMoved) > ringMax) {
            element.style.transform =
              "translateY(" + ringMax + "px)";
          } else if ((newPosition + amountMoved) < ringMin) {
            element.style.transform =
              "translateY(" + ringMin + "px)";
          } else {
            element.style.transform =
              "translateY(" + (newPosition + amountMoved) + "px)";
          }
        });

        //show hide ghost
        document.getElementById("ghostvisible").style.y =
          ghostOffset + amountMoved + "px";
        if (isFirefox) {
          document.getElementById("ghostvisible").setAttribute('y', ghostOffset + amountMoved);
        }

        //show hide clown
        document.getElementById("clownvisible").style.height =
          clownOffset + amountMoved + "px";

        if (isFirefox) {
          document.getElementById("clownvisible").setAttribute('height', clownOffset + amountMoved);
        }

      };

      // when the user releases mouse button, set the position of all of the elements
      document.body.onmouseup = function () {
        newPosition += amountMoved;
        ghostOffset += amountMoved;
        clownOffset += amountMoved;
        document.body.style.cursor = "inherit"; //set cursor to grabbing

        document.body.onmousemove = null;
        document.body.onmouseup = null;
      };
    };
  }
});
