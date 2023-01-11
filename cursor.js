function cursor(){

var arrayOfCursors = ["alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "url", "w-resize", "wait", "zoom-in", "zoom-out"];

// Selects the element
var el = document.getElementById('html');

//mouseover event
el.addEventListener("mouseover", function( event ) {
    // Changes the cursor to a random from cursors array
    el.style.cursor = arrayOfCursors[Math.floor(Math.random() * arrayOfCursors.length)];
});
}
setInterval(cursor, 750);