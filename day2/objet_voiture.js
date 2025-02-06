// Class constructeur pour créer un modèle d'objet
function Voiture(modele, vitesse, couleur) {
  // Propriétés de l'objet
  this.modele = modele;
  this.vitesse = vitesse;
  this.couleur = couleur;

  // Méthode pour afficher les détails de la personne
  this.afficherDetails = function () {
    console.log(
      `Modele: ${this.modele}, Vitesse: ${this.vitesse}, Couleur: ${this.couleur}`
    );
  };
}

// Création d'instances de l'objet modèle
let VoitureDeDaooda = new Voiture("Tesla", 200, "Rouge");
let VoitureDesEtudiants = new Voiture("Ferrari", 350, "Jaune");

// Utilisation de la méthode pour afficher les détails
VoitureDeDaooda.afficherDetails();
VoitureDesEtudiants.afficherDetails();
