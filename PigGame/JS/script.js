"use strict";

const diceSound = new Audio("media/dice.mp3");
const slapSound = new Audio("media/slap.mp3");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let currentScore = 0;
let scores = [0, 0];

let activePlayer = 0;

player1.style.opacity = 1;
player2.style.opacity = 0.1;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const playDice = function () {
  // Génère un nombre aléatoire entre 1 et 6
  let diceRandom = Math.trunc(Math.random() * 6) + 1;

  // Affiche le dé
  diceEl.classList.remove("hidden");
  diceEl.src = "img/dice-" + diceRandom + ".png";

  return diceRandom;
};

btnRoll.addEventListener("click", function () {
  // Génère un nombre aléatoire entre 1 et 6
  let diceRandom = Math.trunc(Math.random() * 6) + 1;
  diceSound.play();

  // Affiche le dé
  diceEl.classList.remove("hidden");
  diceEl.src = "img/dice-" + diceRandom + ".png";

  //document.querySelector("#current--0").textContent = currentScore;

  if (diceRandom !== 1) {
    //currentScore += diceRandom;
    afficheScore(diceRandom);

    btnHold.addEventListener("click", function () {
      score0El.textContent = currentScore;
      scores[0] = currentScore;
      console.log(scores);
    });
  } else {
    switchPlayer();
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    //afficheScore(diceRandom);
  }
});

const reset = function () {
  currentScore = 0;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");

  player1.style.opacity = 1;
  player2.style.opacity = 0.1;

  diceEl.classList.add("hidden");
};
btnNew.addEventListener("click", reset);

const switchPlayer = function () {
  if (
    document.querySelector(".player--0").classList.contains("player--active")
  ) {
    currentScore = 0;
    current0El.textContent = 0;
    slapSound.play();
    document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
    player1.style.opacity = 0.1;
    player2.style.opacity = 1;
    //score0El.textContent = 0;
    current1El.textContent = 0;
  } else {
    currentScore = 0;
    current0El.textContent = 0;
    slapSound.play();
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");

    player1.style.opacity = 1;
    player2.style.opacity = 0.1;
  }
};

function afficheScore(de) {
  // Affichage du Joueur 1
  if (
    document.querySelector(".player--0").classList.contains("player--active")
  ) {
    console.log("Player 1 actif " + de);
    currentScore += de;
    current1El.textContent = 0;
    score0El.textContent = currentScore;
    current0El.textContent = currentScore;
  } else {
    // Affichage du Joueur 2
    console.log("Player 2 actif");
    currentScore += de;
    current1El.textContent = currentScore;
    score1El.textContent = currentScore;
  }
}
