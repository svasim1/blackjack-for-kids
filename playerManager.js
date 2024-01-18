import { addHouseCard } from "./houseManager.js";

let playerHand = [];
let playerWin = null;
let playerBusy = false;

export function setPlayerBusy(value) {
  playerBusy = value;
}

export function getPlayerBusy() {
  return playerBusy;
}

// Add a card to the player's hand
export function addPlayerCard(card) {
    playerHand.push(card);
    updateHand();
}

// Update the player's hand
function updateHand() {
    let handTotal = playerHand.reduce((total, card) => total + card.value, 0);
    updateUI(handTotal);
}

// Update the UI
function updateUI(handTotal) {
    let handTotalElement = document.getElementById("hand-total");
    let hitButton = document.getElementById("hitButton");
    let buttons = document.getElementsByClassName("button");

    handTotalElement.innerHTML = `Hand total: ${handTotal}`;

    // Check if player has won or lost
    if (handTotal === 21) {
        hitButton.disabled = true;
        handTotalElement.innerHTML += ' - Blackjack!';

        playerWin = true;
        setPlayerBusy(false);
        
        console.log("LÄS HÄR!!!!!!!!!!!"+playerBusy);

        return;

    } else if (handTotal > 21) {
        for(let button of buttons) {
            button.disabled = true;
        }
        handTotalElement.innerHTML += ' - Busted!';
        
        playerWin = true;
        setPlayerBusy(false);

        console.log("LÄS HÄR!!!!!!!!!!!"+playerBusy);

        return;
    }
    
    // Update the cards shown on screen
    document.getElementById("hand-cards").innerHTML = '';
    playerHand.forEach(card => {
        let img = document.createElement('img');
        img.src = `cards/${card.cardImage}.png`;
        img.style.width = '50px';
        document.getElementById("hand-cards").appendChild(img);
    });
}

// Export the playerWin variable
export { playerWin };