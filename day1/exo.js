var age = 20;
var nom = "Fatou";
var adresse = "Thies";

console.log(
  "Je m'appelle " + nom + " j'habite à " + adresse + ", j'ai " + age + "ans."
);

if (age >= 1 && age < 18) {
  console.log("Vous etes un MINEUR");
} else if (age >= 18 && age <= 35) {
  console.log("Vous etes un MAJEUR");
} else if (age >= 36 && age <= 100) {
  console.log("Vous etes un SENIOR");
} else {
  console.log("Age n'est pas valide !");
}
