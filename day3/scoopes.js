let variableGlobale = "Je suis globale";

function exempleScope() {
  let variableLocale = "Je suis locale";

  if (true) {
    let variableBloc = "Je suis de bloc";
    console.log(variableBloc); // Affiche "Je suis de bloc"
  }

  console.log(variableLocale); // Affiche "Je suis locale"
}

console.log(variableGlobale); // Affiche "Je suis globale"
