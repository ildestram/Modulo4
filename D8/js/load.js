function loadBtn() {
  let uno = document.getElementById("inputProduct").value;
  let due = document.getElementById("inputDesc").value;
  let tre = document.getElementById("inputBrand").value;
  let quattro = document.getElementById("inputImage").value;
  let cinque = document.getElementById("inputPrice").value;
  let prodotto = {
    name: uno,
    description: due,
    brand: tre,
    imageUrl: quattro,
    price: cinque,
  };
  upload(prodotto);
}

async function upload(prodotto) {
  let url = "https://striveschool-api.herokuapp.com/api/product/";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
    },
    body: JSON.stringify(prodotto),
  };
  let response = await fetch(url, options);
  loadTable();
  window.location.reload();
}

let prodotti = [];
async function listProduct() {
  let urls = "https://striveschool-api.herokuapp.com/api/product/";
  let options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
    },
  };
  await fetch(urls, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      prodotti = data;
      loadTable();
    });
}
listProduct();

let count = 0;
async function loadTable() {
  let url = "https://striveschool-api.herokuapp.com/api/product/";
  let table = document.getElementById("table-t");
  let tableBody = document.createElement("tbody");
  prodotti.forEach((prodotto) => {
    let tr = document.createElement("tr");
    tr.setAttribute("id", [i]);

    let tdId = document.createElement("td");
    tdId.innerText = prodotti[i]._id;

    let tdName = document.createElement("td");
    let tdNameInput = document.createElement("input");
    tdNameInput.value = prodotti[i].name;
    tdNameInput.setAttribute("disabled", "");
    tdNameInput.classList.add("editable");
    tdName.appendChild(tdNameInput);

    let tdDesc = document.createElement("td");
    let tdDescInput = document.createElement("input");
    tdDescInput.value = prodotti[i].description;
    tdDescInput.setAttribute("disabled", "");
    tdDescInput.classList.add("editable");
    tdDesc.appendChild(tdDescInput);

    let tdBrand = document.createElement("td");
    let tdBrandInput = document.createElement("input");
    tdBrandInput.value = prodotti[i].brand;
    tdBrandInput.setAttribute("disabled", "");
    tdBrandInput.classList.add("editable");
    tdBrand.appendChild(tdBrandInput);

    let tdPrice = document.createElement("td");
    let tdPriceInput = document.createElement("input");
    tdPriceInput.value = prodotti[i].price;
    tdPriceInput.setAttribute("disabled", "");
    tdPriceInput.classList.add("editable");
    tdPrice.appendChild(tdPriceInput);

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.setAttribute("type", "button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", (e) => {
      if (count == 0) {
        let trParent = e.target.parentNode;
        let inputs = trParent.getElementsByClassName("editable");
        Array.from(inputs).forEach((el) => {
          edit(el);
        });
        editBtn.innerText = "Update";
        count = 1;
      } else {
        let trParent = e.target.parentNode;
        let inputs = trParent.getElementsByClassName("editable");
        Array.from(inputs).forEach((el) => {
          let text =
            "Sei sicuro di voler modificare il prodotto in: " +
            el.value +
            "\nClicca OK per modificarlo o Cancel per annullare.";
          if (confirm(text) == true) {
            let productUp = {
              name: tdNameInput.value,
              description: tdDescInput.value,
              price: tdPriceInput.value,
              brand: tdBrandInput.value,
            };
            let url =
              "https://striveschool-api.herokuapp.com/api/product/" +
              prodotti[i]._id;
            let options = {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
              },
              body: JSON.stringify(productUp),
            };
            let response = fetch(url, options);
            console.log(response);
            update(el);
          }
        });
        editBtn.innerText = "Edit";
        count = 0;
      }
    });
    let prodId = url + prodotti[i]._id;
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-dark");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", async () => {
      deleteProduct(prodId);
    });

    table.appendChild(tableBody);
    tableBody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdDesc);
    tr.appendChild(tdBrand);
    tr.appendChild(tdPrice);
    tr.appendChild(editBtn);
    tr.appendChild(deleteBtn);
  });
}

async function deleteProduct(e) {
  let options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMwMDdmNDViMjFiZjAwMTQxYzcxZWQiLCJpYXQiOjE2ODA4NjkzNjQsImV4cCI6MTY4MjA3ODk2NH0.boZJdUMF51ctQ6SwWJgBrDPnEDbRrK57fNtDXSmZCZw",
    },
  };
  await fetch(e, options);
}

function edit(el) {
  el.removeAttribute("disabled");
}

function disable(el) {
  el.setAttribute("disabled", "");
}

function update(elements) {
  elements.setAttribute("disabled", "");
}
