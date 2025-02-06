// Fonction qui prend deux paramètres et qui les concatène
function concat(a, b) {
  return console.log(a + " " + b);
}

concat("Bonjour", "tout le monde!");

// Fonction qui prend deux paramètres et donne le plus grand ou s'ils sont égaux
function plusGrand(c, d) {
  if (c > d) {
    return console.log(c + " est supérieur à " + d);
  } else if (c == d) {
    return console.log(c + " est égal à " + d);
  } else {
    return console.log(d + " est supérieur à " + c);
  }
}

plusGrand(189, 98);
