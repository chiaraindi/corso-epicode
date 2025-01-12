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

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

/* Inizio esercizio: */

const totalPrices = prices.reduce ((sum, prices) => sum + prices, 0);
console.log("Costo totale del carrello (senza sconto):", totalPrices);

let discountedTotal = totalPrices;

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  discountedTotal = totalPrices * 0,7; //sconto del 30%
} else {
  discountedTotal = totalPrices; // Nessuno sconto applicato
}
console.log("Costo finale del carrello:", discountedTotal);