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
  const restartButton = document.getElementById("restartButton");
  const hitButton = document.getElementById("hitButton");
  const standButton = document.getElementById("standButton");
  resultElement.textContent = result;
  if (result == "You busted!") {
    resultElement.style.marginLeft = "41%";
  } else if (result == "You lost!") {
    resultElement.style.marginLeft = "43.5%";
  } else  if (result == "Draw!") {
    resultElement.style.marginLeft = "45%"
  } else  if (result == "You win!") {
    resultElement.style.marginLeft = "43.3%"
  } else {
    resultElement.style.marginLeft = "34%"
  }
  resultElement.classList.add("show");
  restartButton.style.display = "flex";
  hitButton.style.display = "none";
  standButton.style.display = "none";
}

export function hideResult() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = '';
}