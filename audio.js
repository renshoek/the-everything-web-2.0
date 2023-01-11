let playSound = () => new Audio("./sound/polka.mp3").play();

playSound.loop = true;

document.getElementById("startbutton").style.display = "none";

        function showStuff() {
            document.getElementById("startbutton").style.display = "block";
        }

        function myFunction() {
            window.location = "index.html"
        }

        setTimeout(showStuff, 9000);