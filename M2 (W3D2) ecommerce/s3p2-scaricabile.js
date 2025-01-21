// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
document.querySelector("h1").innerHTML = "Technology Store";

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
document.querySelector("body").style.backgroundColor = "#A7D8FF"

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
document.querySelector("#store-address").innerHTML = "Via Fittizia, 51, Milano"

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella NON TERMINATO
function aggiungiClasseAiLinkAmazon() {
    const links = document.querySelectorAll('table a');

    links.forEach(link => {
        if (link.href.includes("amazon")) {
            link.classList.add('amazon-link');
        }
    });
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function toggleVisibility() {
    const images = document.querySelectorAll('table img');
    
    images.forEach(image => {
        image.classList.toggle('hidden');
    });
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function cambiaColorePrezzi() {
    const prezzi = document.querySelectorAll('.price');
    const colori = ['red', 'blue', 'green', 'orange', 'purple']; // Array di colori disponibili

    prezzi.forEach(prezzo => {
        const coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
        prezzo.style.color = coloreCasuale;
    });
}