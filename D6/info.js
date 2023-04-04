document.addEventListener("DOMContentLoaded", () => {
  //deve esserci prima di ogni addEventListener per caricare la pagina. Se non ci fosse, non esisterebbeo elementi prima del caricamento

  const queryString = new URLSearchParams(window.location.search); //consente di recuperare i valori dell'url
  console.log(queryString);

  let id = queryString.get("id");
  console.log(queryString.get("id"));
  //dentro parentesi va da ? compreso fino a fine

  fetch(`https://jsonplaceholder.typicode.com/users/` + id, {})
    .then((response) => {
      console.log("Risposta ricevuta:", response);
      return response.json();
    })
    .then((data) => {
      console.log("Dati convertiti in JSON:", data);

      mostraDati(data);
    })
    .catch((err) => {
      console.log("Azz! C'è un errore, eccolo qui: " + err);
    });
});

function mostraDati(data) {
  /*     const lat = 41.8558193;
    const lng = 12.7550778; */
  const oggetto = document.querySelector("#container");
  oggetto.innerHTML = `
    <p> Nome: ${data.name}</p>
    <p> Username: ${data.username}</p>
    <p> Mail: ${data.email}</p>
    <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${data.address.geo.lat},${data.address.geo.lng}(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
    `;
}
