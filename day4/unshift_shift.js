let fruits = ["pomme", "banane", "orange"];

fruits.unshift("kiwi", "mangue", "abricot");
console.log(fruits); // Affiche ['kiwi', 'pomme', 'banane', 'orange']

fruits.shift();
console.log(fruits); // Affiche ['pomme', 'banane', 'orange']
