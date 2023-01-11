$('#D3Cube').mouseover(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#D3Cube'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;
    
    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});