export function getResult(playerWin, houseWin) {
  if (playerWin && houseWin) {
    return "Draw";
  } else if (playerWin) {
    return "Player wins";
  } else if (houseWin) {
    return "House wins";
  } else {
    return "Error";
  }
}
