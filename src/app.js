/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".num").innerHTML = numGenerator();

  var symb = simbGenerator();
  if (symb == "♥" || symb == "♦") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
  //document.querySelectorAll(".simb")[0].innerHTML = symb;
  //document.querySelectorAll(".simb")[1].innerHTML = symb;
  var lista = document.querySelectorAll(".simb");
  for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    lista[i].innerHTML = symb;
  }

  setInterval(() => {
    //window.location.reload(1);
    document.querySelector(".num").innerHTML = numGenerator();
    var symb = simbGenerator();
    if (symb == "♥" || symb == "♦") {
      document.querySelector(".card").style.color = "red";
    } else {
      document.querySelector(".card").style.color = "black";
    }

    var lista = document.querySelectorAll(".simb");
    for (var i = 0; i < lista.length; i++) {
      console.log(lista[i]);
      lista[i].innerHTML = symb;
    }
  }, 5000); //5 sec

  // DUDA QUERYSELECTOR ALL ¿?
  //var lista = (document.querySelectorAll(".simb").innerHTML = symb);
  //for (var i; i < lista.length; i++) {
  //  alert(lista[i]);
  //lista[item].innerHTML = symb;
  //}
  //document.querySelectorAll(".simb")[0].innerHTML = symb;
  //document.querySelectorAll(".simb")[1].innerHTML = symb;

  //Modficar ancho y alto de la carta
  var inputAncho = document.querySelector("#CardWidth");
  inputAncho.addEventListener("keyup", e => {
    var ancho = e.target.value;
    console.log(ancho);
    document.querySelector(".card").style.width = ancho + "px";
  });

  var inputAlto = document.querySelector("#CardHeight");
  inputAlto.addEventListener("keyup", e => {
    var alto = e.target.value;
    console.log(alto);
    document.querySelector(".card").style.height = alto + "px";
  });

  // Funcionalidad botón
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".num").innerHTML = numGenerator();
    var symb = simbGenerator();
    if (symb == "♥" || symb == "♦") {
      document.querySelector(".card").style.color = "red";
    } else {
      document.querySelector(".card").style.color = "black";
    }
    // document.querySelectorAll(".simb")[0].innerHTML = symb;
    // document.querySelectorAll(".simb")[1].innerHTML = symb;

    var lista = document.querySelectorAll(".simb");
    for (var i = 0; i < lista.length; i++) {
      console.log(lista[i]);
      lista[i].innerHTML = symb;
    }
  });

  //console.log("Hello Rigo from the console!");
};

let numGenerator = () => {
  var numCarta = [
    "A",
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
};

let simbGenerator = () => {
  var claseSimb = ["♥", "♦", "♣", "♠"];
  return claseSimb[Math.floor(Math.random() * claseSimb.length)];
};
