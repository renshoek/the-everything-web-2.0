  const marquee = document.getElementById("marquee");
  let position = 0;
  setInterval(function() {
    position -= 1;
    if (position < -marquee.offsetWidth) {
      position = 0;
    }
    marquee.style.transform = `translateX(${position}px)`;
  }, 1);