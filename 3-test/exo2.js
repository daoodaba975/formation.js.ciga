// Déclaration fonction pour vérifie si un nombre est pair ou impair

function estPair(nombre) {
  if (nombre % 2 === 0) {
    return "Pair";
  } else {
    return "Impair";
  }
}

console.log(estPair(4));
console.log(estPair(7));
