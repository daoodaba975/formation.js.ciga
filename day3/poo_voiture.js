// Fonction constructeur pour créer un modèle d'objet
function Voiture(modele, vitesse, couleur) {
  this.modele = modele;
  this.vitesse = vitesse;
  this.couleur = couleur;

  // Méthode pour afficher les détails de la personne
  this.afficherDetails = function () {
    console.log(
      `Le modele est un: ${this.modele}, la vitesse est de: ${this.vitesse}KM, et la couleur est: ${this.couleur}`
    );
  };
}

// Création d'instances de l'objet modèle
let Voiture1 = new Voiture("Tesla", 200, "Rouge");
let Voiture2 = new Voiture("Ferrari", 350, "Jaune");
let Voiture3 = new Voiture("Peugeot", 180, "Gris");

// Utilisation de la méthode pour afficher les détails
Voiture1.afficherDetails();
Voiture2.afficherDetails();
Voiture3.afficherDetails();
