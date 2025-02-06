// ESERCIZIO 1: Selezionare l'h1 nella sezione "hero" (jumbotron)
document.querySelector(".jumbotron h1").style.color = "blue";

// ESERCIZIO 2: Selezionare tutti i figli della navbar
document.querySelectorAll(".nav > span").forEach(el => el.style.fontWeight = "bold");

// ESERCIZIO 3: Selezionare il link "Continua a leggere" del jumbotron
document.querySelector(".jumbotron a").style.textDecoration = "underline";

// ESERCIZIO 4: Selezionare il primo blog post
document.querySelector(".blog-post").style.border = "2px solid black";

// ESERCIZIO 5: Selezionare l'<hr> del primo blog post e colorarlo di rosso
document.querySelector(".blog-post hr").style.backgroundColor = "red";

// ESERCIZIO 6: Selezionare i link pari della navbar
document.querySelectorAll(".nav span:nth-child(even)").forEach(el => el.style.color = "green");

// ESERCIZIO 7: Selezionare tutti gli <li> della prima "ordered-list" della sidebar
document.querySelectorAll(".sidebar ol:first-of-type li").forEach(el => el.style.fontStyle = "italic");

// ESERCIZIO 8: Selezionare l'autore del secondo blog post
document.querySelectorAll(".blog-post-meta a")[1].style.color = "purple";

// ESERCIZIO 9: Selezionare il secondo <li> della lista del terzo blog post
document.querySelector(".blog-post:nth-of-type(3) li:nth-child(2)").style.fontWeight = "bold";

// ESERCIZIO 10: Selezionare il link "Torna su" in basso a destra
document.querySelector("a[href='#top']").style.fontSize = "20px";

// ESERCIZIO 11: Selezionare il bottone "Nuovi" in basso
document.querySelector("button:last-of-type").style.backgroundColor = "orange";

// ESERCIZIO 12: Selezionare il secondo link del footer
document.querySelector("footer a:nth-of-type(2)").style.textDecoration = "underline";
