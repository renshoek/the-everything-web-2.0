const dogButton = document.getElementById("getDog");

dogButton.addEventListener("click",getIdea);

function getIdea(e){
  console.log("fetch request");
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(resp => resp.json())
  .then((data) => {
    document.getElementById("piccy").src = data.message;
  }).catch( (e) => console.log(e));
}