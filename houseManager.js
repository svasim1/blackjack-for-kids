import { hit } from "./game.js";

let houseHand = [];
let houseWin = null;

export function addHouseCard(card) {
    houseHand.push(card);
    console.log(houseHand);
    updateHand();
}

function updateHand() {
    let handTotal = houseHand.reduce((total, card) => total + card.value, 0);

    if (handTotal < 17) {
        hit();
    }
    updateUI(handTotal);
}

function updateUI() {
    document.getElementById("house-cards").innerHTML = '';
    houseHand.forEach(card => {
        let img = document.createElement('img');
        img.src = `cards/${card.cardImage}.png`;
        img.style.width = '50px';
        img.style.height = 'auto';
        document.getElementById("house-cards").appendChild(img);
    });
}