document.addEventListener("DOMContentLoaded", function () {
    const API_URLS = {
      eminem: "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem",
      metallica: "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
      queen: "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
    };
  
    function fetchSongs(artist, sectionId) {
      fetch(API_URLS[artist])
        .then(response => response.json())
        .then(data => {
          console.log(`Dati ricevuti per ${artist}:`, data); // Log per debug
          if (data.data) {
            updateSongs(data.data, sectionId);
          } else {
            console.error(`Formato dati non valido per ${artist}`, data);
          }
        })
        .catch(error => console.error(`Errore nel recupero dati per ${artist}:`, error));
    }
  
    function updateSongs(songs, sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.innerHTML = ""; // Pulisce la sezione
        songs.slice(0, 4).forEach(song => {
          console.log("Aggiungo canzone:", song); // Log per debug
          const songCard = document.createElement("div");
          songCard.classList.add("col", "mb-4");
          songCard.innerHTML = `
            <div class="card h-100">
              <img src="${song.album.cover_medium}" class="card-img-top" alt="${song.title}">
              <div class="card-body">
                <h5 class="card-title">${song.title}</h5>
                <p class="card-text">${song.artist.name}</p>
                <a href="${song.link}" class="btn btn-primary" target="_blank">Ascolta</a>
              </div>
            </div>
          `;
          section.appendChild(songCard);
        });
      } else {
        console.warn(`Sezione ${sectionId} non trovata nell'HTML.`);
      }
    }
  
    // Effettua le chiamate API per ogni artista
    fetchSongs("eminem", "eminemSection");
    fetchSongs("metallica", "metallicaSection");
    fetchSongs("queen", "queenSection");
  });