const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.calculator-display');

let expression = ''; // Stringa che contiene l'espressione

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '=') {
      // Calcola il risultato
      expression = eval(expression); // Calcola direttamente con eval
      display.textContent = expression; // Mostra il risultato
    } else if (value === 'C') {
      // Cancella tutto
      expression = ''; // Reset della stringa
      display.textContent = '0'; // Torna allo stato iniziale
    } else {
      // Costruisce l'espressione
      expression += value; // Aggiunge il valore premuto
      display.textContent = expression; // Mostra l'espressione aggiornata
    }
  });
});
