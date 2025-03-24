document.addEventListener("DOMContentLoaded", () => {
  const searchField = document.getElementById("searchField");
  const searchButton = document.getElementById("button-search");
  const searchResults = document.getElementById("searchResults");
  const resultsContainer = document.querySelector(".imgLinks");

  // Funzione per mostrare il loader
  const showLoader = () => {
    searchResults.style.display = "block";
    resultsContainer.innerHTML = `
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    `;
  };

  // Funzione per cercare canzoni
  const searchSongs = async () => {
    const query = searchField.value.trim();
    if (!query) return;
    
    showLoader(); // Mostra il loader mentre carica
    
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      displaySongs(data.data);
    } catch (error) {
      console.error("Errore nel recupero dati:", error);
      resultsContainer.innerHTML = "<p class='text-danger'>Errore nel caricamento dei dati.</p>";
    }
  };

  // Funzione per mostrare le canzoni
  const displaySongs = (songs) => {
    if (songs.length === 0) {
      resultsContainer.innerHTML = "<p class='text-warning'>Nessun risultato trovato.</p>";
      return;
    }
    
    resultsContainer.innerHTML = songs.map(song => `
      <div class="col mb-3">
        <div class="card shadow-sm">
          <img src="${song.album.cover_medium}" class="card-img-top" alt="${song.title}">
          <div class="card-body">
            <h5 class="card-title">${song.title}</h5>
            <p class="card-text">${song.artist.name}</p>
            <a href="${song.link}" target="_blank" class="btn btn-primary">Ascolta su Deezer</a>
          </div>
        </div>
      </div>
    `).join("");
  };

  // Event listener sul bottone di ricerca
  searchButton.addEventListener("click", searchSongs);

  // Permette la ricerca premendo "Enter"
  searchField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchSongs();
    }
  });
});
