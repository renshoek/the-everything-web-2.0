function GetValue()
{
   function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const d = randomDate(new Date(1000, 0, 1), new Date());
document.getElementById("message").innerHTML=d;
}


function displayHello() {
  document.getElementById("hello").innerHTML += "Just 1 more";
}

setInterval(displayHello, 5000);
setInterval(GetValue, 200);
