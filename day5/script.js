//! Récupération des éléments
let premierDiv = document.getElementById("div1");
let monH1 = document.querySelector(".titre");
let deuxiemeDiv = document.getElementById("div2");
let premierPara = document.querySelector(".para1");
let deuxiemePara = document.querySelector(".para2");
let troisiemeDiv = document.getElementById("div3");
let monImg = document.querySelector(".image0");
let monNouveauTxt = document.getElementById("monText");
let monNouveauBtn = document.getElementById("monBouton");

//? Manipulation des éléments
premierDiv.style.backgroundColor = "aqua";
monH1.innerHTML = "Nouveau Titre";
monH1.innerText = "CIGA";
deuxiemeDiv.addEventListener("mouseover", function () {
  alert("Test!");
});

monImg.style.height = "300px";
monImg.style.width = "300px";

if (monNouveauTxt.length >= 10) {
  console.log("OK");
} else {
  console.log("NON");
}

monNouveauBtn.addEventListener("click", function () {
  alert("Ok !");
});
