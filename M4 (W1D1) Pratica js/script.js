// Funzione che controlla se uno dei due numeri è 50 o se la loro somma è 50
function checkFifty(num1, num2) {
    return num1 === 50 || num2 === 50 || (num1 + num2 === 50);
}
console.log(checkFifty(25, 25)); // true
console.log(checkFifty(50, 10)); // true
console.log(checkFifty(30, 10)); // false

// Funzione che rimuove il carattere a una specifica posizione da una stringa
function removeChar(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}
console.log(removeChar("hello", 1)); // "hllo"
console.log(removeChar("world", 3)); // "wold"

// Funzione che controlla se due numeri sono compresi tra 40 e 60 o tra 70 e 100
function inRange(num1, num2) {
    const range1 = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const range2 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);
    return range1 || range2;
}
console.log(inRange(45, 55)); // true
console.log(inRange(75, 85)); // true
console.log(inRange(30, 90)); // false

// Funzione che ritorna il nome se inizia con "Los" o "New", altrimenti false
function checkCityName(name) {
    return name.startsWith("Los") || name.startsWith("New") ? name : false;
}
console.log(checkCityName("Los Angeles")); // "Los Angeles"
console.log(checkCityName("New York")); // "New York"
console.log(checkCityName("Chicago")); // false
