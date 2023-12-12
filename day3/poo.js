// Déclaration d'un objet en utilisant une fonction constructeur
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}

// Création d'une instance de l'objet
let personne1 = new Personne("Alice", 25);

console.log(personne1.nom); // Affiche "Alice"
console.log(personne1.age); // Affiche 25
