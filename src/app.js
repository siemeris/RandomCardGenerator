/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let num = document.querySelector(".num");
  num.innerHTML = numGenerator();

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".num").innerHTML = numGenerator();
  });
};

var simb = ["corazones", "diamantes", "tréboles", "picas"];

function numGenerator() {
  var numCarta = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return numCarta[Math.floor(Math.random() * numCarta.length)];
}
