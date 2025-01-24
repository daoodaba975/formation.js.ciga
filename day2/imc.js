function imc(poids, taille) {
  var r = poids / (taille * taille);

  if (r < 18.5) {
    console.log(r + " : Maigre");
  } else if (r >= 18.5 && r <= 25) {
    console.log(r + " : Normal");
  } else if (r > 25 && r <= 30) {
    console.log(r + " : Surpoids");
  } else if (r > 30 && r <= 40) {
    console.log(r + " : Obésité modérée");
  } else if (r > 40) {
    console.log(r + " : Obésité sévére");
  }
}

imc(100, 1.6);
