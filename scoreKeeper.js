//Limiting number when clicking buttons
var gameOver = false;
var winningScore = 5;

//Player One Button selection
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

//Player Two Button selection
var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

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