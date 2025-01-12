const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 105, 102]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

/* Facciamo la somma del carrello */

const totalPrices = prices.reduce ((sum, prices) => sum + prices, 0);
console.log("Costo totale del carrello (senza sconto):", totalPrices);

/* Applichiamo lo sconto */

let discountedTotal = totalPrices;

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  discountedTotal = totalPrices * 0.7; //sconto del 30%
} else {
  discountedTotal = totalPrices; //nessuno sconto applicato
}
console.log("Costo finale del carrello:", discountedTotal);

/* Calcoliamo i costi di spedizione */

let finalTotal = discountedTotal;

if (discountedTotal <= 100) {
  finalTotal += shippingCost; //spese di spedizione aggiunte per spese minori di 100 euro
} else {
  console.log("La spedizione è gratuita!");
}

console.log("Costo totale del carrello (inclusa spedizione):", finalTotal);

/* gestione ambassador */

const users = [];
users.push(marco, paul, amy);

users.forEach(user => {
  if (user.isAmbassador) {
    console.log(`${user.name} ${user.lastName} è un ambassador`);
  } else {
    console.log(`${user.name} ${user.lastName} NON è un ambassador`);
  }
});

/* array con solo ambassador" */

const ambassadors = users.filter(user => user.isAmbassador);
console.log("Ambassadors", ambassadors);