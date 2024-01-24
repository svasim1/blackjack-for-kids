import { hit } from "./game.js";
import { getResult } from "./getResult.js";
import { playerHandTotal } from "./playerManager.js";

let houseHand = [];
let houseHandTotal = 0;

export function addHouseCard(card) {
  houseHand.push(card);
  console.log(houseHand);
  updateHand();
}

function updateHand() {
  let houseHandTotal = houseHand.reduce((total, card) => total + card.value, 0);

  if (houseHandTotal < 17) {
    //hit();
  } else if (houseHandTotal >= 17) {
    let result = getResult(houseHandTotal, playerHandTotal);
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").classList.add("show");
    document.getElementById(
      "house-total"
    ).innerHTML = `House hand total: ${houseHandTotal}`;
  }

  updateUI();
}

function updateUI() {
  document.getElementById("house-cards").innerHTML = "";
  houseHand.forEach((card) => {
    let img = document.createElement("img");
    img.src = `cards/${card.cardImage}`;
    img.style.width = "50px";
    img.style.height = "auto";
    document.getElementById("house-cards").appendChild(img);
  });
}

export { houseHandTotal };
