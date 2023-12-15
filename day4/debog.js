let nombre1 = 5;
let nombre2 = 0;

console.log("Début du programme");

try {
  let résultat = nombre1 / nombre2;
  console.log("Résultat : " + résultat);
} catch (erreur) {
  console.error("Une erreur s'est produite : " + erreur.message);
} finally {
  console.log("Fin du programme");
}
