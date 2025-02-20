// Si on est le LUNDI donc est au début de la semaine
// Si on est le MARDI donc est au début de la semaine
// Si on est le MERCREDI donc est au milieu de la semaine
// Si on est le JEUDI donc est au milieu de la semaine
// Si on est le VENDREDI donc on est en fin de semaine
// Si on est le SAMEDI ou le DIMANCHE donc on est en weekend

let jour;

jour = "SAMEDI";

if (jour == "LUNDI" || jour == "MARDI") {
  console.log("On est en début de semaine !");
} else if (jour == "MERCREDI" || jour == "JEUDI") {
  console.log("On est en milieu de semaine !");
} else if (jour == "VENDREDI") {
  console.log("On est en fin de semaine !");
} else if (jour == "SAMEDI" || jour == "DIMANCHE") {
  console.log("On est en weekend !");
} else {
  console.log(
    "Veuillez saisir un jour valable avec toute les lettres en majuscule !"
  );
}
