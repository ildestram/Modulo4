// PRIMA ROW CARD CON JAVASCRIPT
let containerDiv = document.createElement("div");
containerDiv.classList.add("container");

let rowDiv = document.createElement("div");
rowDiv.classList.add("row", "justify-content-end");

for (let i = 0; i < 3; i++) {
  let colDiv = document.createElement("div");
  colDiv.classList.add("col-md-3");

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  let title = document.createElement("h5");
  title.classList.add("card-title" + i);
  title.setAttribute("id", "titolo-" + i);
  title.textContent = "Titolo della canzone";

  let img = document.createElement("img");
  img.classList.add("card-img-top");
  img.setAttribute("alt", "copertina-album" + i);
  img.setAttribute("id", "copertina-" + i);

  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body", +i);

  let duration = document.createElement("p");
  duration.classList.add("card-text" + i);
  duration.setAttribute("id", "durata-" + i);
  duration.textContent = "";

  cardBodyDiv.appendChild(title);
  cardBodyDiv.appendChild(duration);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);
  rowDiv.appendChild(colDiv);
}
containerDiv.appendChild(rowDiv);
document.body.appendChild(containerDiv);

document.addEventListener("DOMContentLoaded", async () => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari"
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);

      const titolo = document.getElementById("titolo-0");
      titolo.textContent = data.data[0].title;

      const durata = document.getElementById("durata-0");
      durata.textContent = data.data[0].duration + "sec";

      const img = document.getElementById("copertina-0");
      img.src = data.data[0].album.cover_medium;
    });
  });

  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin"
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);

      const titolo = document.getElementById("titolo-1");
      titolo.textContent = data.data[0].title;

      const durata = document.getElementById("durata-1");
      durata.textContent = data.data[0].duration + "sec";

      const img = document.getElementById("copertina-1");
      img.src = data.data[0].album.cover_medium;
    });
  });

  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood"
  ).then((response) => {
    response.json().then((data) => {
      console.log(data);

      const titolo = document.getElementById("titolo-2");
      titolo.textContent = data.data[0].title;

      const durata = document.getElementById("durata-2");
      durata.textContent = data.data[0].duration + "sec";

      const img = document.getElementById("copertina-2");
      img.src = data.data[0].album.cover_medium;
    });
  });
});
