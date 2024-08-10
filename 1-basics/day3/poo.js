// Déclaration d'un objet en utilisant une fonction constructeur
function Personne(nom, age, adresse) {
  this.nom = nom;
  this.age = age;
  this.adresse = adresse;
}

// Création d'une instance de l'objet
let personne1 = new Personne("Alice", 25, "Paris");
let personne2 = new Personne("Mouhamed", 20, "Guédiawaye");

console.log(
  "Bonjour moi c'est " +
    personne2.nom +
    " j'habite à " +
    personne2.adresse +
    " et j'ai " +
    personne2.age +
    " ans."
);
