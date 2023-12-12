function Animal(nom) {
  this.nom = nom;
}

// Ajout d'une méthode au prototype
Animal.prototype.direBonjour = function () {
  console.log("Bonjour, je suis " + this.nom);
};

let chat = new Animal("Whiskers");
chat.direBonjour(); // Affiche "Bonjour, je suis Whiskers"
