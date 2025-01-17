class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  presentation() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

let personne1 = new Personne("Alice", 25);
let personne2 = new Personne("Mouhamed", 20);

personne1.presentation();
personne2.presentation();
