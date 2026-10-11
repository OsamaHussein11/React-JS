let randomNumber = Math.floor(Math.random() * 50) + 1; // Generate a random number between 1 and 50...
let guessNumber;

do {
  guessNumber = Number(prompt("Guess a number from 1 to 50:"));

  if (isNaN(guessNumber)) {
    alert("Please enter a number!");
  } else if (guessNumber < randomNumber) {
    alert("Try a higher number!");
  } else if (guessNumber > randomNumber) {
    alert("Try a lower number!");
  } else {
    alert("Correct! You guessed the number!");
  }
} while (guessNumber !== randomNumber);
