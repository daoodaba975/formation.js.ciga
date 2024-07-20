import { resultat } from "./calcul.js";
import { Personne } from "./poo.js";

// console.log(resultat);

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
