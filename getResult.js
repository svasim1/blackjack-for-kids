export function getResult(houseHandTotal, playerHandTotal) {
  let result = "";

  if (playerHandTotal > 21) {
    result = "You busted!";
  } else if (houseHandTotal > 21) {
    result = "House busted! You win!";
  } else if (playerHandTotal <= 21 && playerHandTotal > houseHandTotal) {
    result = "You win!";
  } else if (houseHandTotal <= 21 && houseHandTotal > playerHandTotal) {
    result = "You lost!";
  } else if (playerHandTotal === houseHandTotal) {
    result = "Draw!";
  }

  return result;
}
