class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  presentation() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

class Etudiant extends Personne {
  constructor(nom, age, niveau) {
    super(nom, age);
    this.niveau = niveau;
  }

  afficherNiveau() {
    console.log(`Je suis un étudiant de niveau ${this.niveau}.`);
  }
}

let etudiant = new Etudiant("Mouhamed", 20, 3);

etudiant.afficherNiveau();
etudiant.presentation();
