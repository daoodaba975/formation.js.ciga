// Je veux créer une fonction qui permet de calculer la moyenne d'un tableau de nombres

function calculerMoyenne(tab) {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme / tab.length;
}

// Je veux calculer la moyenne d'un tableau de nombres

let tab = [1, 2, 3, 4, 5];
