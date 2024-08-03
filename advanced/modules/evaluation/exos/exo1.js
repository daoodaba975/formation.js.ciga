let note1 = 6;
let note2 = 8;
let note3 = 11;

let moyenne = (note1 + note2 + note3) / 3;

// Exportation de la fonction qui calcule la moyenne
export function Moyenne() {
  if (moyenne >= 10) {
    return "Admis";
  } else {
    return "Non admis";
  }
}
