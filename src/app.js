/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function cardGenerator() {
  let cardNumber = [
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

  let cardType = ["Diamonds", "Spades", "Clubs", "Hearts"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomCardType = Math.floor(Math.random() * cardType.length);
  let finalCardType = cardType[randomCardType];

  document.getElementById("cardContent").innerHTML =
    cardNumber[randomCardNumber];
  document.getElementById("randomCard").className = "";
  document.getElementById("randomCard").classList.add("card");
  document
    .getElementById("randomCard")
    .classList.add(randomType(finalCardType));
}

function cardGenratorTimer() {
  setTimeout(cardGenerator, 2000);
}

function randomType(cardType) {
  const typeMap = {
    Diamonds: "type-Diamonds",
    Spades: "type-Spades",
    Clubs: "type-Clubs",
    Hearts: "type-Hearts"
  };
  return typeMap[cardType];
}

window.onload = function() {
  cardGenerator();

  const cardButton = document.getElementById("cardButton");
  if (cardButton) {
    cardButton.addEventListener("click", function() {
      cardGenerator();
    });
  }

  const cardButtonTimer = document.getElementById("cardButtonTimer");
  if (cardButtonTimer) {
    cardButtonTimer.addEventListener("click", function() {
      cardGenratorTimer();
    });
  }
};

//falta que el temporizador sea un bucle y botón para pararlo
