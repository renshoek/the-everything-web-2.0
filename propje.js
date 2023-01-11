const image = document.getElementById("paper");

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

function dragStart(event) {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;

    if (event.target === image) {
       isDragging = true;
    }
}

function dragEnd(event) {
    initialX = currentX;
    initialY = 0;

    xOffset = currentX;
    yOffset = 0;

    setTranslate(currentX, 0, image);

    isDragging = false;
}

function drag(event) {
    if (isDragging) {
       event.preventDefault();
       currentX = event.clientX - initialX;
       currentY = event.clientY - initialY;

       xOffset = currentX;
       yOffset = currentY;

       setTranslate(currentX, currentY, image);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}