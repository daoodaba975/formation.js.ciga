// Scoopes : portée des variables

let variableGlobale = "Je suis globale";

function exempleScope() {
  let variableLocale = "Je suis locale";

  if (true) {
    let variableBloc = "Je suis de bloc";
    console.log(variableBloc);
  }

  console.log(variableLocale);
}

console.log(variableGlobale);
