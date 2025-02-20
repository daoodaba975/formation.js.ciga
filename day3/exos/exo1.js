const calculerMoyenne = (tab) => {
  let somme = 0;
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return somme / tab.length;
};

let tab = [1, 2, 3, 4, 5];

console.log(calculerMoyenne(tab));
