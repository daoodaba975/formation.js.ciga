let promise = new Promise((PromesseOK, PromesseNON) => {
  let effectif = 80;

  if (effectif >= 100) {
    PromesseOK("Promesse tenue !");
  } else {
    PromesseNON("Promesse rejetée !");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
