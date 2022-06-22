let randomNumber = Math.floor(Math.random() * 100);

const guesses = document.getElementById("guesses")! as HTMLParagraphElement;
const lastResult = document.querySelector(
  ".lastResult"
) as HTMLParagraphElement;
const lowOrHi = document.querySelector(".lowOrHi") as HTMLParagraphElement;
const guessSubmit = document.querySelector(".guessSubmit") as HTMLInputElement;
const guessField = document.querySelector(".guessField") as HTMLInputElement;

let resetButton: HTMLButtonElement;
let guessesTries: number = 0;

guesses.textContent = "Previous Guesses: ";

const checkGuess = () => {
  const userGuess = Number(guessField.value);

  // Writes userGuess
  guesses.textContent += userGuess + " ";

  // Check if the number is right
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";

    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";

    lowOrHi.textContent = `Last guess was too ${
      userGuess < randomNumber ? "low" : "high"
    }!`;

    guessesTries++;

    guessField.value = "";
    guessField.focus();
  }

  console.log(guessesTries);

  if (guessesTries === 3) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  }
};

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);

  resetButton.addEventListener("click", resetGame);
};

const resetGame = () => {
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.remove();

  guessField.disabled = false;
  guessSubmit.disabled = false;

  guessField.value = "";
  guessField.focus();

  guessesTries = 0;
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100);
};

console.log(randomNumber);
guessSubmit.addEventListener("click", checkGuess);
