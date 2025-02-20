function moyenne(nom, js, algo, html, php, css) {
  let resultat = (js + algo + html + php + css) / 5;
  return nom + ", ta moyenne est de = " + resultat;
}

const note = (nom, js, algo, html, php, css) => {
  let resultat = (js + algo + html + php + css) / 5;
  return nom + ", ta moyenne est de = " + resultat;
};

let etudiants = [
  moyenne("Modou", 10, 15, 20, 5, 10),
  moyenne("Moussa", 15, 15, 15, 15, 15),
  moyenne("Mamadou", 5, 5, 5, 5, 5),
  note("Fatou", 20, 20, 20, 20, 20),
  note("Aminata", 10, 10, 10, 10, 10),
  note("Sokhna", 15, 15, 15, 15, 15),
];

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}
