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
    alert("Yay!");
}

function playBtn() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    menu.style.display = "none";
    game.style.display = "flex";
}

function optBtn() {
    var menu = document.getElementById("menuSection");
    var options = document.getElementById("optSection");
    menu.style.display = "none";
    options.style.display = "flex";
}

function ldrBrdBtn() {
    var ldrBrd = document.getElementById("leaderboard");
    var menu = document.getElementById("menuSection");
    menu.style.display = "none";
    ldrBrd.style.display = "block";
}

function backToMenu() {
    var game = document.getElementById("gameSection");
    var menu = document.getElementById("menuSection");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    menu.style.display = "flex";
    game.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
}

window.onkeydown = keyPressed;

// if esc is pressed, run backToMenu(), which basically is the reverse of playBtn()
function keyPressed(event) {
    if (event.keyCode == 27) {
        backToMenu();
    }
}