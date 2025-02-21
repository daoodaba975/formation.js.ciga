// Fonction constructeur
function Personne(nom, adresse, age) {
  this.nom = nom;
  this.adresse = adresse;
  this.age = age;
}

// Méthode au prototype
Personne.prototype.direBonjour = function () {
  console.log("Bonjour, moi c'est " + this.nom);
};

Personne.prototype.ouJhabite = function () {
  console.log("Je habite à " + this.adresse);
};

Personne.prototype.monAge = function () {
  console.log("J'ai : " + this.age + "ans");
};

// Création objet Personne
let daooda = new Personne("Daouda", "Guédiawaye", 16);
let issa = new Personne("Issa", "Pikine", 18);
let awa = new Personne("Awa", "Keur Massar", 20);

daooda.direBonjour();
issa.ouJhabite();
awa.monAge();
