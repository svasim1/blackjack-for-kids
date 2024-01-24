// Ted Strömne fixar Javascript som gömmer och visar element och sådant

// document.getElementById("gameSection")
    // document.getElementById("HandsDiv")
    // document.getElementById("ownHandDiv")
    // document.getElementById("ownHand")
    // document.getElementById("dealerHandDiv")
    // document.getElementById("dealerHand")
    // document.getElementById("btnsDiv")

// function Me() {
//     document.getElementById("hitBtn").disabled = true;
//     document.getElementById("standBtn").disabled = true;
// }

function MeToo() {
    alert("Yay!")
}

function playButton() {
    var game = document.getElementById("gameSection");
    var menu = document.getElementById("menuSection")
    menu.style.display = "none"
    game.style.display = "flex";
}

function backToMenu() {
    var game = document.getElementById("gameSection");
    var menu = document.getElementById("menuSection");
    menu.style.display = "flex";
    game.style.display = "none";
}

window.onkeydown = keyPressed;

function keyPressed(event) {
    if (event.keyCode == 27) {
        backToMenu();
    }
}