try {
  // Code potentiellement problématique
  let resultat = 10 / 0;
  console.log(resultat);
} catch (erreur) {
  // Gestion de l'erreur
  console.error(erreur.message);
}

console.log("Fin du programme");

let test = "Bonjour tout le monde!";
console.log(test.length);
