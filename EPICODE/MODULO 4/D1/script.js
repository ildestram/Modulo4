// ESERCIZIO 1
// Primo modo
function sumInteger(a, b) {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
console.log(sumInteger(3, 5));

// Secondo modo
let x = Math.floor(Math.random());
let y = Math.floor(Math.random());

function sum(x, y) {
  let result = 0;
  if (x === y) {
    result = (x + y) * 3;
  } else {
    result = x + y;
  }
  return result;
}
console.log(sum(3, 5));

// ESERCIZIO 2
function checkInteger(nu, num) {
  if (nu === 50 || num === 50 || nu + num === 50) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(checkInteger(51, 60));
console.log(checkInteger(100, 50));

// ESERCIZIO 3 ? controlla con gli altri, non sei sicura di questo
function removeSomething(str, pos) {
  return str.slice(1, pos) + str.slice(pos + 2);
}
console.log(removeSomething("ilde", 3));

// ESERCIZIO 4
function highestNumber(a, b, c) {
  let highest = Math.max(a, b, c);
  return highest;
}
console.log(highestNumber(41, 39, 25));

// ESERCIZIO 5
function compresi(pippo, baudo) {
  if (
    // si può fare in un altro modo, ma non so come -> chiedilo agli altri
    (pippo > 40 && pippo < 60) ||
    (pippo > 70 && pippo < 100) ||
    (baudo > 40 && baudo < 60) ||
    (baudo > 70 && baudo < 100)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(compresi(50, 40));

// ESERCIZIO 6
// Ho una stringa e tramite una funzione devo fare in modo che quella stessa stringa venga ripetuta tot numero di volte -> stringa e tot di volte devono essere passate come parametri
function repeatTot(str, tot) {
  // Inizio con una stringa vuota
  let inizia = "";

  for (let i = 0; i < tot; i++) {
    inizia += str;
  }
  return inizia;
}
console.log(repeatTot("team1", 4)); // ripete team1 quattro volte

// ESERCIZIO 7
function checkCity(name) {
  if (name.startsWith("Los") || name.startsWith("New")) {
    console.log(name);
  } else {
    console.log("false");
  }
}
console.log(checkCity("Rimini")); // false
console.log(checkCity("Los Angeles"));
console.log(checkCity("New York"));

// ESERCIZIO 8
function sumElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumElements([1, 5, 7])); // 13

// ESERCIZIO 9
function checkArray(check) {
  if (check.includes(1) || check.includes(3)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(checkArray([1, 2, 3])); // true
console.log(checkArray([4, 8, 9])); // false

// ESERCIZIO 10
function doNotContain(arr) {
  if (!arr.includes(1) || !arr.includes(3)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(doNotContain([4, 5])); // true
console.log(doNotContain([1, 3])); // false
console.log(doNotContain([1, 4])); // perchè mi viene fuori true? 1 lo contiene, non dovrebbe essere false? Forse con || OR per essere true devono essere entrambi?

// ESERCIZIO 11
function longestString(arrString) {
  let longest = "";
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length > longest.length) {
      longest = arrString[i];
    }
  }
  return longest;
}
console.log(longestString(["andrea", "veronica", "samuele"]));
// RICORDATI: prima hai messo nell'array di stringhe anche il nome gianluca e hai notato che in console ti veniva solo gianluca, perchè non è uscito in console gianluca e veronica? Forse perchè gianluca era al primo posto? Quindi nel caso in cui ci siano due stringhe con egual valore javascript ritorna la prima stringa che incontra?

// ESERCIZIO 12
function angleDegree(degrees) {
  if (degrees < 90) {
    return "acuto";
  } else if (degrees > 90 && degrees < 180) {
    return "ottuso";
  } else if (degrees === 90) {
    return "retto";
  } else if (degrees === 180) {
    return "piatto";
  }
}
console.log(angleDegree(90)); // retto
console.log(angleDegree(40)); // acuto

// ESERCIZIO 13
function indexHighestNumber(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[highest]) {
      highest = i;
    }
  }
  return highest;
}
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(indexHighestNumber(arrayNumbers)); // 6 -> viene 6 perchè il 7 (che è il numero più grande) si trova alla posizione 6 (indice)

// ESERCIZIO 14
function searchReturnEven(arr) {
  let highestEven = 0;
  for (let i = 0; i < arr.length; i++) {
    // const even = arr[i]; -> posso usarlo o meno - forse è meglio utilizzarlo
    if (arr[i] % 2 === 0 && arr[i] > highestEven) {
      highestEven = arr[i];
    }
  }
  return highestEven;
}
const evenNumbers = [4, 6, 8, 10];
console.log(searchReturnEven(evenNumbers));

// ESERCIZIO 15
function negativePositive(a, b) {
  if (a > 0 && b < 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(negativePositive(2, -1)); // true
console.log(negativePositive(2, 4)); // false

// ESERCIZIO 16
function upperLower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
  }
}
console.log(upperLower("gianfranco"));
console.log(upperLower("io"));

// ESERCIZIO 17
function sumBetween(c, d) {
  let sum = c + d;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sumBetween(40, 80)); // 80
console.log(sumBetween(20, 40)); // 65

// ESERCIZIO 18
function convertNumToStr(num) {
  let primo = "Diego";
  let secondo = "Riccardo";
  let terzo = "Stefano";

  if (num % 3 === 0) {
    return primo;
  } else if (num % 5 === 0) {
    return secondo;
  } else if (num % 7 === 0) {
    return terzo;
  }
  return num || primo.concat("", secondo); // non mi funziona e non mi viene, chiedi agli altri
}

console.log(convertNumToStr(10));

// ESERCIZIO 19
function acronymus(phrase) {
  const splitWords = phrase.split(" ");
  const singleLetters = splitWords.reduce((single, word) => {
    return single + word.charAt(0).toUpperCase();
  }, "");
  return singleLetters;
}
console.log(acronymus("Fabbrica Italiana Automobili Torino"));
