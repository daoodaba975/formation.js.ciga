class Véhicule {
  constructor(marque) {
    this.marque = marque;
  }

  rouler() {
    console.log(this.marque + " roule...");
  }

  arreter() {
    console.log(this.marque + " est a l'arret...");
  }
}

let voiture = new Véhicule("Toyota");
voiture.rouler();
voiture.arreter();
