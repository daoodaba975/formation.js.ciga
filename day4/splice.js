let fruits = ["pomme", "banane", "orange"];

fruits.splice(1, 0, "kiwi"); // Ajoute 'kiwi' à la position 1
console.log(fruits); // Affiche ['pomme', 'kiwi', 'banane', 'orange']

fruits.splice(2, 1); // Supprime 1 élément à la position 2
console.log(fruits); // Affiche ['pomme', 'kiwi', 'orange']
