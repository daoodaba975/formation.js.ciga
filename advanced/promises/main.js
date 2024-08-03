let maPrommesse = new Promise((PromesseOUI, PromesseNON) => {
  let effectif = 150;

  if (effectif >= 100) {
    PromesseOUI("Promesse tenue !");
  } else {
    PromesseNON("Promesse rejetée !");
  }
});

maPrommesse
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
