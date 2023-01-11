function generateCard() {
   var suitsInner = [
      "hearts",
      "spades",
      "diamond",
      "clubs"
   ];
   var suitsOuter = [
      "hearts",
      "spades",
      "diams",
      "clubs"
   ];
   var ranksInner = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
   var ranksOuter = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k']
   var suitIndex = Math.floor(Math.random() * suitsOuter.length)
   var suit = [
      suitsOuter[suitIndex],
      suitsInner[suitIndex]
   ];
   var rankIndex = Math.floor(Math.random() * ranksOuter.length);
   var rank = [
      ranksOuter[rankIndex],
      ranksInner[rankIndex]
   ];
   document.getElementById("cardArea").innerHTML += "<div class='card rank-" + rank[0] + " " + suit[0] + "'><span class='rank'>" + rank[1] + "</span><span class='suit'>&" + suit[1] + ";</span></div>";
}

function clear() {
   document.getElementById("cardArea").innerHTML = "";
}

setInterval(generateCard, 3543);
