let resNum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const guessed = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loworhigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = [];

let playGame = true;
if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    guessNum=parseInt(guessed.value);
    validateGuess(guessNum);
  });
}

function validateGuess(guessNum) {
  if (isNaN(guessNum) || guessNum > 100 || guessNum < 0) {
    alert("Not a valid input");
  } else {
    if(resNum===guessNum){
        endGame();
    }
    prevGuess.push(guessNum);
    displayMessage(guessNum);
  }
}
function checkGuss(guessed) {}
function displayMessage(message) {
    newRemain=parseInt(remaining.value)-1;
    if (newRemain == -1){
        playGame = false;
    }
    else{
        remaining.innerText= newRemain;
    }
}
function newGame() {}
function endGame() {
    playGame=false
}
