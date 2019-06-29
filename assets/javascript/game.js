console.log("Hey, thanks for checking out my project, if you have any questions email me @ test@test.com")

var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesText = document.getElementById("guesses-text");

var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log("cpu guess " + computerGuess);

document.onkeyup = function(event) {
  var userGuess = event.key;
  console.log("user guess " + userGuess);

  //guesses.push(guesses);

  //what happens when you win
  //wins go up by one
  //empty your array

  if (userGuess === computerGuess) {
    wins++;
    guessesLeft = 10;
    guesses = 0;

    //what happens if you lose
    //extend array to include wrong guess
    //guesses go up
    //guesses left go down
  }
  if (userGuess !== computerGuess) {
    guessesLeft--;
    guesses++;

    //if your guesses reach zero
    //game lost
  }
  if (guessesLeft === 0) {
    losses++;
    guesses = 0;
    wins = 0;
    guessesLeft = 10;
  }
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses left: " + guessesLeft;
  guessesText.textContent = "Your guesses so far: " + guesses;
}
