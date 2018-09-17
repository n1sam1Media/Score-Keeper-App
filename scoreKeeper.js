//Limiting number when clicking buttons
var gameOver = false;
var winningScore = 5;

//Selecting input and p span
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

//Player One Button selection
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

//Player Two Button selection
var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

//Selecting reset button
var resetButton = document.getElementById("reset");

//Event Listener for changing playing to value
numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
});

//Event Listener for player one
p1Button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

//Event Listener for player two
p2Button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

//Event Listener for Reset Button
resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
});