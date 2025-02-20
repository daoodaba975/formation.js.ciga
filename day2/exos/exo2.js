function concat(a, b) {
  return console.log(a + " " + b);
}

concat("Bonjour", "tout le monde!");

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
