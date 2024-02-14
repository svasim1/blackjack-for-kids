// Function to get the result of the game
export function getResult(houseHandTotal, playerHandTotal) {
  let result = "";

  // Check for player bust
  if (playerHandTotal > 21) {
    result = "You busted!";
  }
  // Check for house bust
  else if (houseHandTotal > 21) {
    result = "House busted! You win!";
  }
  // Check if player wins
  else if (playerHandTotal > houseHandTotal) {
    result = "You win!";
  }
  // Check if house wins
  else if (houseHandTotal > playerHandTotal) {
    result = "You lost!";
  }
  // Check for a draw
  else {
    result = "Draw!";
  }

  return result;
}

// Function to display the result
export function displayResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
  resultElement.classList.add("show");
}
