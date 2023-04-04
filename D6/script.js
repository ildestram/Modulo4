document.addEventListener("DOMContentLoaded", async () => {
  const users = await getUsers();
  renderUsers(users);
});

const API_URL = "https://jsonplaceholder.typicode.com/users";
const usersTable = document.querySelector("#users-table");
const filterBy = document.querySelector("#filter-by");
const filterValue = document.querySelector("#filter-value");
const filterButton = document.querySelector("#filter-button");
const listNamesButton = document.querySelector("#list-names-button");
const listAddressesButton = document.querySelector("#list-addresses-button");
const ordinaAscendente = document.querySelector(
  "#ordina-ascendente-discendente"
);

// Funzione che prende tutti gli users dalla fetch API
async function getUsers() {
  //   gestisco gli errori tramite try ... catch
  try {
    const response = await fetch(API_URL);
    const users = await response.json();
    return users; // ricorda di fare return, altrimenti non ti legge il forEach successivo alla riga 33
    // console.log(users);
  } catch (error) {
    console.log(error);
  }
}
// getUsers();

// Funzione per mostrare gli elementi che abbiamo preso tramite la FETCH API
function renderUsers(users) {
  const tbody = usersTable.querySelector("tbody");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        `;

    tbody.appendChild(tr);
  });
}

// Funzione che filtra per nome/mail/username
function filterUsers(users, key, value) {
  return users.filter((user) => {
    user[key].toLowerCase().includes(value.toLowerCase());
  });
}
filterButton.addEventListener("click", async () => {
  console.log("ho cliccato filter");
  const users = await getUsers();
  const filteredUsers = filterUsers(users, filterBy.value, filterValue.value);
  renderUsers(filteredUsers);
});

// Funzione che mostra la lista dei nomi nel momento del click
function listNames(users) {
  // console.log("ho cliccato list names");
  const names = users.map((user) => user.name);
  alert(names.join("\n")); // è il new line, fa andare a capo a ogni riga
}
listNamesButton.addEventListener("click", async () => {
  const users = await getUsers();
  listNames(users);
});

// Funzione che mostra la lista degli indirizzi nel momento del click
function getAdressString(users) {
  return users.map(
    (user) => `
  ${user.address.street} | ${user.address.city} | ${user.address.zipcode}`
  );
}
listAddressesButton.addEventListener("click", async () => {
  const users = await getUsers();
  listAddresses(users);
});
function listAddresses(users) {
  const addresses = getAdressString(users);
  alert(addresses.join("\n"));
}

// Bottone per reverse degli users in base ai numeri (id)
let ascendenti = true;
let originalList = [];
ordinaAscendente.addEventListener("click", async () => {
  console.log("ho cliccato");
  let answer = ascendenti ? 1 : -1;
  console.log(answer);

  const users = await getUsers();
  originalList = users;
  const reversedUsers = originalList.sort((a, b) => {
    // sort ordina gli elementi di un array in ordine alfabetico
    if (a.name > b.name) {
      return answer;
    } else {
      return answer * -1;
    }
  });
  ascendenti = !ascendenti;
  renderUsers(reversedUsers);
});
