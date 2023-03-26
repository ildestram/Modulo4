// PULSANTE LOAD IMAGES = al clic devono essere mostrate le immagini provenienti da una particolari API con la mia chiave di accesso

const btnLoad = document.getElementById("myBtn");
// const valoreAPI = "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q";
btnLoad.addEventListener("click", () => {
  // devono essere mostrate le immagini provenienti dall'API
  fetch(`https://api.pexels.com/v1/search?query=flowers`, {
    method: "GET",
    headers: {
      Authorization: "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let images = document.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        images[i].src = data.photos[i].src.original;
        let idImages = document.getElementsByTagName("small");
        idImages[i].innerText = data.photos[i].id;
      }
      let buttons = document.getElementsByClassName(
        "btn btn-sm btn-outline-secondary"
      );
      let btnGroups = document.getElementsByClassName("btn-group");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-toggle", "modal");
        if (i % 2 == 0) {
          buttons[i].setAttribute("data-target", "#" + data.photos[i].id);
        }
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.classList.add("fade");
        modal.setAttribute("id", data.photos[i].id);
        modal.setAttribute("aria-labelledby", "#" + data.photos[i].id);
        modal.setAttribute("aria-hidden", "true");
        let modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog");
        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        let modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        let modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.setAttribute("id", data.photos[i].id);
        modalTitle.innerText = data.photos[i].id;
        let modalButton = document.createElement("button");
        modalButton.setAttribute("type", "button");
        modalButton.classList.add("btn-close");
        modalButton.setAttribute("data-dismiss", "modal");
        modalButton.setAttribute("aria-label", "close");
        let modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        let immagine = document.createElement("img");
        immagine.setAttribute("src", data.photos[i].original);

        modalBody.appendChild(immagine);
        modalHeader.appendChild(modalButton);
        modalHeader.appendChild(modalTitle);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        btnGroups[i].appendChild(modal);
      }
    });
});

// Al clic del secondo bottone escono nuove immagini da una nuova api
const secondBtn = document.getElementById("mySecondBtn");
secondBtn.addEventListener("click", () => {
  fetch(`https://api.pexels.com/v1/search?query=monkeys`, {
    method: "GET",
    headers: {
      Authorization: "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let secondImages = document.getElementsByTagName("img");
      for (let i = 0; i < secondImages.length; i++) {
        secondImages[i].src = data.photos[i].src.original;
        let idImages = document.getElementsByTagName("small");
        idImages[i].innerText = data.photos[i].id;
      }
      let buttons = document.getElementsByClassName(
        "btn btn-sm btn-outline-secondary"
      );
      let btnGroups = document.getElementsByClassName("btn-group");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("data-toggle", "modal");
        if (i % 2 == 0) {
          buttons[i].setAttribute("data-target", "#" + data.photos[i].id);
        }
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.classList.add("fade");
        modal.setAttribute("id", data.photos[i].id);
        modal.setAttribute("aria-labelledby", "#" + data.photos[i].id);
        modal.setAttribute("aria-hidden", "true");
        let modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog");
        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        let modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header");
        let modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.setAttribute("id", data.photos[i].id);
        modalTitle.innerText = data.photos[i].id;
        let modalButton = document.createElement("button");
        modalButton.setAttribute("type", "button");
        modalButton.classList.add("btn-close");
        modalButton.setAttribute("data-dismiss", "modal");
        modalButton.setAttribute("aria-label", "close");
        let modalBody = document.createElement("div");
        modalBody.classList.add("modal-body");
        let immagine = document.createElement("img");
        immagine.setAttribute("src", data.photos[i].original);

        modalBody.appendChild(immagine);
        modalHeader.appendChild(modalButton);
        modalHeader.appendChild(modalTitle);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);
        btnGroups[i].appendChild(modal);
      }
    });
});

// Al premere del bottone, devono scomparire le card
// 1. prendo il bottone dal documento inserendolo in una variabile
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  // seleziono in una costante tutte le card all'interno del documento, mi accorgo con un console.log che mi viene fuori una html collection
  // quando viene cliccato il bottone entriamo nel ciclo while
  const deleteCards = document.getElementsByClassName("card");
  // questo ciclo continua a funzionare fino a quando le card all'interno di deleteCards non sono finite
  while (deleteCards.length > 0) {
    deleteCards[0].parentNode.removeChild(deleteCards[0]);
  }
});

// In base ad un input mi devono venire fuori le immagini relative all'input
let thirdBtn = document.getElementById("myThirdButton");
thirdBtn.addEventListener("click", () => {
  let search = document.getElementById("search");
  let variabileQuery = search.value;
  fetch(`https://api.pexels.com/v1/search?query=${variabileQuery}`, {
    method: "GET",
    headers: {
      Authorization: "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let apiImages = document.getElementsByTagName("img");
      for (let i = 0; i < apiImages.length; i++) {
        apiImages[i].src = data.photos[i].src.original;
      }
    })
    .catch((err) => console.log("errore"));
});

// Gestisci alert con messaggi personalizzati -> commentato, poi quando mi serve lo scommento
// const errorAlert = document.getElementById("errorAlert");
// const errorMessage = document.getElementById("errorMessage");
// fetch("https://api.pexels.com/v1/search?query=", {
//   method: "GET",
//   headers: {
//     Authorization: "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q",
//   },
// })
//   .then((response) => {
//     if (!response.ok) {
//       errorMessage.textContent = "Failed to fetch data";
//       errorAlert.classList.remove("d-none");
//       throw new Error("Failed to fetch data");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// IL CAROSELLO NON HO IDEA DI COME SI FACCIA CON LA CHIAMATA API

// MAP
fetch(`https://api.pexels.com/v1/search?query=flowers`, {
  method: "GET",
  headers: {
    Authorization: "Z4KMh5v8MPtHTsCNhut1GzbsWSYetiDH77itixIoQyyPX1DXlgVsKh5Q",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const urls = data.photos.map((item) => item.url); // RICORDA: il map funziona solo sugli array, per fare in modo che map funzioni anche in questo caso devo per forza aggiungere .photos dopo data, altrimenti genera un errore. In quanto photos equivale all'array che voglio iterare
    console.log(urls);
    // FILTER
    const author = "Secret Garden";
    const authorApi = data.photos.filter(
      (photos) => photos.photographer === author
    );
    console.log(authorApi);
  });
