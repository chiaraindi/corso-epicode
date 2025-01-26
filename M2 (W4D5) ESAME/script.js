// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//creare una funzione che cerca per posizione lavorativa E posizione geografica
function cercaLavori(cercaPerPosizione, cercaPerLuogo) {
  if (!cercaPerPosizione || !cercaPerLuogo) {
    return {
      result: [],
      count: 0
    };
  }

  const offerteTrovate = [];
  
  //itera tutti gli annunci
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];

    //rende tutto minuscolo
    const titolo = job.title.toLowerCase();
    const luogo = job.location.toLowerCase();

    //verifica corrispondenza
    if (titolo.includes(cercaPerPosizione.toLowerCase()) &&
        luogo.includes(cercaPerLuogo.toLowerCase())) {
      offerteTrovate.push(job);
    }
  }

  return {
    result: offerteTrovate,
    count: offerteTrovate.length
  };
}

//test
const risultato = cercaLavori("work", "lnd");
console.log(risultato);

//parte 2
const inputPosizione = document.getElementById("posizione");
const inputLuogo = document.getElementById("luogo");
const bottoneCerca = document.getElementById("cerca-btn");
const risultatiContainer = document.getElementById("risultati");

function aggiornaRisultati(listaLavori) {
  risultatiContainer.innerHTML = "";

  if (listaLavori.count === 0) {
    const messaggio = document.createElement("p");
    messaggio.textContent = "Nessun risultato trovato.";
    risultatiContainer.appendChild(messaggio);
    return;
  }

  //lista dei risultati
  const ul = document.createElement("ul");
  for (let i = 0; i < listaLavori.result.length; i++) {
    const lavoro = listaLavori.result[i];
    const li = document.createElement("li");
    li.textContent = `${lavoro.title} - ${lavoro.location}`;
    ul.appendChild(li);
  }
  risultatiContainer.appendChild(ul);
}

//evento click sul pulsante "cerca"
bottoneCerca.addEventListener("click", function () {
  const posizioneInserita = inputPosizione.value;
  const luogoInserito = inputLuogo.value;

  //test
  console.log("Valore posizione inserita:", posizioneInserita);
  console.log("Valore luogo inserito:", luogoInserito);

  const risultato = cercaLavori(posizioneInserita, luogoInserito);

  //test
  console.log("Risultato della ricerca:", risultato);

  aggiornaRisultati(risultato);
});
