let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.getElementById("guesses")! as HTMLParagraphElement;
const lastResult = document.querySelector(
  ".lastResult"
) as HTMLParagraphElement;
const lowOrHi = document.querySelector(".lowOrHi") as HTMLParagraphElement;
const guessSubmit = document.querySelector(".guessSubmit") as HTMLInputElement;
const guessField = document.querySelector(".guessField") as HTMLInputElement;

let resetButton: HTMLButtonElement;

interface guesses {
  Tries: number;
  NumberOfGamesPlayed: number;
  NumberOfWins: number;
  Guesses: number[];
}

let guessesObj: guesses = {
  Tries: 0,
  NumberOfGamesPlayed: 0,
  NumberOfWins: 0,
  Guesses: [],
};

guesses.textContent = "Previous Guesses: ";

const checkGuess = () => {
  const userGuess = Number(guessField.value);
  guessesObj.Guesses.push(userGuess);

  // Writes userGuess
  guesses.textContent += userGuess + " ";

  // Check if the number is right
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";

    guessesObj.NumberOfWins++;

    return setGameOver();
  }

  if (userGuess != randomNumber) {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";

    lowOrHi.textContent = `Last guess was too ${
      userGuess < randomNumber ? "low" : "high"
    }!`;

    guessesObj.Tries++;

    guessField.value = "";
    guessField.focus();
  }

  if (guessesObj.Tries === 3) {
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

  guessesObj.NumberOfGamesPlayed++;
  console.log(guessesObj);

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

  lastResult.style.backgroundColor = "white";

  guessesObj.Tries = 0;

  randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log(randomNumber);
};

console.log(randomNumber);
guessSubmit.addEventListener("click", checkGuess);
