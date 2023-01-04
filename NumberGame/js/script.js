"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const victorySound = new Audio("media/victory.mp3");
const lostSound = new Audio("media/lost.mp3");
//const chronoSound = new Audio("/media/tictac.mp3");
//const failSound = new Audio("media/fail.mp3");

function afficheMessage(message) {
  document.querySelector(".message").textContent = message;
}

function changeMessageCouleur(couleur) {
  document.querySelector(".message").style.color = couleur;
}

function valider() {
  document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);

    // Teste les erreurs si le nombre est inférieur à 0 ou supérieur à 20 et si aucun nombre est rentré
    if (!guess || guess > 20 || guess < 0) {
      afficheMessage("⚠️ Entrez un nombre entre 1 et 20 !");
      changeMessageCouleur("#D30101");
    }
    // Condition si le nombre est le bon
    else if (guess === secretNumber) {
      highscore = score;
      document.querySelector(".number").textContent = secretNumber;
      changeMessageCouleur("#fff");
      afficheMessage("👌 Vous avez gagné !");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".highscore").textContent = highscore;
      victorySound.play();
      document.querySelector(".check").style.display = "none";

      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
      }
    }

    // Condition si le nombre supérieur
    else if (guess > secretNumber) {
      score--;
      changeMessageCouleur("#fff");
      document.querySelector(".score").textContent = score;
      afficheMessage("⏫ TROP GRAND !");
      //failSound.play();
      if (score < 1) {
        afficheMessage("😢 VOUS AVEZ PERDU !!");
        document.querySelector("body").style.backgroundColor = "#D30101 ";
        lostSound.play();
        document.querySelector(".check").style.display = "none";
      }
    }

    // Condition si le nombre inférieur
    else if (guess < secretNumber) {
      score--;
      changeMessageCouleur("#fff");
      document.querySelector(".score").textContent = score;
      afficheMessage("⏬ TROP PETIT !");
      //failSound.play();
      if (score < 1) {
        afficheMessage("😢 VOUS AVEZ PERDU !!");
        document.querySelector("body").style.backgroundColor = "#D30101";
        lostSound.play();
        document.querySelector(".check").style.display = "none";
      }
    }
  });
}

valider();
document.querySelector(".again").addEventListener("click", function () {
  reset();
});

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  afficheMessage("COMMENCEZ...");
  changeMessageCouleur("#fff");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").style.display = "";
  //chronoSound.play();
}

function playSound() {
  chronoSound.play();
  chronoSound.loop = true;
}

function muteSound() {
  chronoSound.pause();
}

function stopSound() {
  chronoSound.pause();
}
/*
document.addEventListener("keypress", function (e) {
  if (e.key === " ") playSound();
  if (e.key === "m") {
    console.log(e.key);
    muteSound();
  }
});    */

function chrono(minuteur, time) {
  const minuteur = 100;
  let temps;
}
setTimeout(chrono());

/*let minute = function (minute) {
  document.querySelector(".minute").textContent = minute;
};
*/

/*let seconde = function (seconde) {
  document.querySelector(".seconde").textContent = seconde;
};
*/
