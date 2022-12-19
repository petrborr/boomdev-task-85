import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // let names = []
  const ul = document.querySelector("ul");
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(res => res.json())
    .then(data => data['results']
    .forEach(planet => {
    const nameElement = document.createElement("li")
    nameElement.innerText = planet["name"]
    ul.appendChild(nameElement)
    }))
});
