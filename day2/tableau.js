// Déclaration d'un tableau
let fruits = ["Pomme", "Banane", "Orange"];
let age = [11, 12, 13];

fruits.pop();
fruits.push("Mangue");
fruits.push("Papaye");
fruits.pop();

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits[0]);

console.log(age[2]);

// Afficher tout les éléments du tableau
let etudiants = ["Modou", "Mamadou", "Fatou", "Aminata"];

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}
