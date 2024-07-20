let note1 = 18;
let note2 = 20;
let note3 = 11;

let moyenne = (note1 + note2 + note3) / 3;

export function Moyenne() {
  if (moyenne >= 10) {
    return "Admis";
  } else {
    return "Non admis";
  }
}
