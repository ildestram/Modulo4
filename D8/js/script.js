// funzione per il loader - apertura
function openLoad() {
  document.getElementById("loader").classList.remove("hidden");
}

// funzione per il loader - chiusura
function closeLoad() {
  document.getElementById("loader").classList.add("hidden");
}

// ALTRO MODO
// async function getProducts() {
//   const response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/product/",
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
//       },
//     }
//   );
//   const products = await response.json();
//   console.log(products);
//   return products;
// }
// getProducts();

// prendo l'API e assegno l'url ad una variabile così da chiamarla più facilmente
let url = "https://striveschool-api.herokuapp.com/api/product/";
let prodotti = [];
async function prod() {
  await fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      prodotti = data;
      //   console.log(prodotti);
      console.log(prodotti);
      // createCards(prodotti);
    });
}
prod();

function createCards(prodotti) {
  openLoad();
  let container = document.getElementById("containerCard");
  container.setAttribute("style", "display: flex;");
  //   let prodotti = [];
  //   prodotti.forEach(prodotto => {})
  prodotti.forEach((prodotto) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem;");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", prodotti[i].imageUrl);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = prodotti[i].name;

    let cardBrand = document.createElement("h6");
    cardBrand.classList.add("card-subtitle");
    cardBrand.classList.add("mb-2");
    cardBrand.classList.add("text-muted");
    cardBrand.innerText = prodotti[i].brand;

    let cardPar = document.createElement("p");
    cardPar.classList.add("card-text");
    cardPar.innerText = prodotti[i].description;

    let cardPrice = document.createElement("div");
    cardPrice.classList.add("text-center");
    cardPrice.innerText = prodotti[i].price + "$";

    let cardBtn = document.createElement("button");
    cardBtn.classList.add("btn");
    cardBtn.classList.add("btn-primary");
    cardBtn.innerText = "View Product";
    cardBtn.addEventListener("click", () => {
      let firstUrl = url + prodotti[i]._id;
      let prod = fetch(firstUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          prod = res;
          let prodJs = JSON.stringify(prod);
          let opened = window.open("");
          opened.document.write(
            "<body><div class='container' id='demo'>",
            prodJs,
            "</div></body>"
          );
        });
    });
    cardBody.appendChild(img);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardBrand);
    cardBody.appendChild(cardPar);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardBtn);
    card.appendChild(cardBody);
    container.appendChild(card);
  });
}
closeLoad();
