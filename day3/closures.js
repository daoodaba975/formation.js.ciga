// Closures

function créerCompteur() {
  let compteur = 0;

  function incrémente() {
    compteur++;
    console.log(compteur);
  }
  return incrémente;
}

const monCompteur = créerCompteur();
monCompteur();
