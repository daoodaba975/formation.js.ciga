class Véhicule {
  constructor(marque) {
    this.marque = marque;
  }

  rouler() {
    console.log(this.marque + " roule...");
  }
}

let voiture = new Véhicule("Toyota");
voiture.rouler(); // Affiche "Toyota roule..."
