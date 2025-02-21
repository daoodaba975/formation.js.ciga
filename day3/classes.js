// Classe Etudiant
class Etudiant {
  // Constructeur
  constructor(nom, prenom, filiere, niveau) {
    this.nom = nom;
    this.prenom = prenom;
    this.filiere = filiere;
    this.niveau = niveau;
  }

  // Méthodes
  sePresenter() {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
  }
  ceQueJetudie() {
    console.log("Je suis en " + this.filiere + ", niveau : " + this.niveau);
  }
}
