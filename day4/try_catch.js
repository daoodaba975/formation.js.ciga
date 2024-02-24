try {
  // Code potentiellement problématique
  let resultat = 10 / 0; // Division par zéro : impossible
  console.log(resultat);
} catch (erreur) {
  // Gestion de l'erreur
  console.error("Une erreur s'est produite : " + erreur.message);
}
