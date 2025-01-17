let fruits = ["pomme", "banane", "orange", "mangue", "abricot", "pamplemousse"];

fruits.splice(3, 0, "kiwi", "lemon"); // Ajoute 'kiwi' à la position 1
console.log(fruits); // Affiche ['pomme', 'kiwi', 'banane', 'orange']

fruits.splice(2, 2); // Supprime 1 élément à la position 2
console.log(fruits); // Affiche ['pomme', 'kiwi', 'orange']
