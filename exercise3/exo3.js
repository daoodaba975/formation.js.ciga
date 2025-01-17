// Fonctions
// Objectif : Créer une fonction qui calcule la moyenne de trois nombres.

// Pour trouver la somme de trois nombres faudra dabord additionner ces 3 nombres puis les diviser par 3

function Moyenne(a, b, c) {
  let somme = a + b + c;
  let moyenne = somme / 3;
  return moyenne;
}

let resultat = Moyenne(15, 10, 17);
console.log(resultat);
