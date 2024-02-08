// Ted Strömne fixar Javascript som gömmer och visar element och sådant

function toRules() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection");
    var contactTitle = document.getElementById("contactTitle");
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "flex";
    rulesTitle.style.display = "block";
    contact.style.display = "none";
    contactTitle.style.display = "none";
}

function toContact() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection")
    var contactTitle = document.getElementById("contactTitle")
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "flex";
    contactTitle.style.display = "block";
}

function back() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection")
    var contactTitle = document.getElementById("contactTitle")
    var register = document.getElementById("registerSection");
    menu.style.display = "flex";
    game.style.display = "none";
    gameTitle.style.display = "block";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
}

function playBtn() {
    var menu = document.getElementById("menuSection");
    var register = document.getElementById("registerSection");
    menu.style.display = "none";
    register.style.display = "flex";
}

function toGameBtn() {
    var register = document.getElementById("registerSection");
    var game = document.getElementById("gameSection");
    register.style.display = "none";
    game.style.display = "flex";
}

function standFunction() {
    alert("You lost!")
}

function hitFunction() {
    alert("You win!")
}

function optBtn() {
    var menu = document.getElementById("menuSection");
    var options = document.getElementById("optSection");
    menu.style.display = "none";
    options.style.display = "flex";
}

function playAudio() {
    document.getElementById("bgMusic").play()
}

function stopAudio() {
    document.getElementById("bgMusic").pause()
}

document.getElementById("volumeSlide").oninput = function() {
    document.getElementById("bgMusic").volume = this.value;
}

function ldrBrdBtn() {
    var ldrBrd = document.getElementById("leaderboard");
    var menu = document.getElementById("menuSection");
    menu.style.display = "none";
    ldrBrd.style.display = "block";
}

function backToMenu() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection")
    var contactTitle = document.getElementById("contactTitle")
    var register = document.getElementById("registerSection");
    menu.style.display = "flex";
    game.style.display = "none";
    gameTitle.style.display = "block";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
}

window.onkeydown = keyPressed;
// if esc is pressed, run backToMenu()
function keyPressed(event) {
    if (event.keyCode == 27) {
        backToMenu();
    }
}

// turn off chrome's shitty password suggestions in the username input field
var inputElement = document.getElementById("usernameInput");
inputElement.setAttribute("autocomplete", "off");

// send the username and score to firebase when clicking registerPlayBtn
var username = document.getElementById("usernameInput");
var score = document.getElementById("scoreInput");
const registerPlayBtn = document.getElementById("registerPlayBtn");

// registerPlayBtn.addEventListener("click", (e) => {
//     // preventDefault() disables the default behaviour of clicking a type="submit" button, which is to refresh
//     // the page which we don't want
//     e.preventDefault();
//     if (username.value && score.value) {
//         db.collection("pointsLeaderboard").doc().set({
//             username: username.value,
//             score: score.value
//         // after the data has been sent to firebase, run toGameBtn()
//         }).then(() => {
//                 toGameBtn();
//         })
//     } else {
//         alert("Please enter a username and score!")
//     }
// });