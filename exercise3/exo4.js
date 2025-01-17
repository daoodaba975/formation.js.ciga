// Fonction et Condition
// Objectif : Créer une fonction qui vérifie si un nombre est premier.

// Un nombre premier est un nombre qui est divisible par 1 et lui meme

function Premier(nombre) {
  let pr = "Ce nombre est premier";
  let npr = "Ce nombre n'est pas premier";

  if (nombre <= 1) {
    return npr;
  }
  for (let i = 2; i < nombre; i++) {
    if (nombre % i == 0) {
      return npr;
    }
  }
  return pr;
}

console.log(Premier(2));
