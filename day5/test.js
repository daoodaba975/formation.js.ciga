// Sélection d'élément
let bouton = document.getElementById("monBouton");
let open = document.querySelector(".Op");

// Ajout d'un gestionnaire d'événements
bouton.addEventListener("mouseover", function () {
  alert("Le bouton a été cliqué!");
});

// Ouvrir le lien du balise a
open.addEventListener("click", function () {
  window.open("https://openclassrooms.com/fr");
});
