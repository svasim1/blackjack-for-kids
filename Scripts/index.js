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
    var register = document.getElementById("registerSection");
    if (game.style.display == "flex") {
        var confirm = document.getElementById("backConfirmation");
        var background = document.getElementById("blackBackground");
        confirm.style.display = "flex";
        background.style.display = "flex";
    } else {
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "flex";
    rulesTitle.style.display = "block";
    contact.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
    }
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
    var register = document.getElementById("registerSection");
    if (game.style.display == "flex") {
        var confirm = document.getElementById("backConfirmation");
        var background = document.getElementById("blackBackground");
        confirm.style.display = "flex";
        background.style.display = "flex";
    } else {
    menu.style.display = "none";
    game.style.display = "none";
    gameTitle.style.display = "none";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "flex";
    contactTitle.style.display = "block";
    register.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
    }
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
    // set the timer to 0 when pressing the button to start the game, since the timer starts counting on page load
    // totalSeconds = 0;
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
    var contact = document.getElementById("contactSection");
    var contactTitle = document.getElementById("contactTitle");
    var register = document.getElementById("registerSection");
    var lose = document.getElementById("loseScreen");
    if (game.style.display == "flex") {
        var confirm = document.getElementById("backConfirmation");
        var background = document.getElementById("blackBackground");
        confirm.style.display = "flex";
        background.style.display = "flex";
    } else {
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
        lose.style.display = "none";
    }
}

function fromGameToMenu() {
    var menu = document.getElementById("menuSection");
    var game = document.getElementById("gameSection");
    var gameTitle = document.getElementById("gameTitle");
    var options = document.getElementById("optSection");
    var ldrBrd = document.getElementById("leaderboard");
    var rules = document.getElementById("rulesSection");
    var rulesTitle = document.getElementById("rulesTitle");
    var contact = document.getElementById("contactSection");
    var contactTitle = document.getElementById("contactTitle");
    var register = document.getElementById("registerSection");
    var confirm = document.getElementById("backConfirmation");
    var background = document.getElementById("blackBackground");
    var lose = document.getElementById("loseScreen");
    game.style.display = "none";
    menu.style.display = "flex";
    gameTitle.style.display = "block";
    options.style.display = "none";
    ldrBrd.style.display = "none";
    rules.style.display = "none";
    rulesTitle.style.display = "none";
    contact.style.display = "none";
    contactTitle.style.display = "none";
    register.style.display = "none";
    confirm.style.display = "none";
    background.style.display = "none";
    lose.style.display = "none";
}

function lose() {
    var background = document.getElementById("blackBackground");
    var lose = document.getElementById("loseScreen");
    background.style.display = "flex";
    lose.style.display = "flex";
}

function fromLoseToMenu() {
    if (username.value) {
        if (score.value) {
            var time = Date.now()
            db.collection("pointsLeaderboard").doc(`${time}`).set({
                username: username.value,
                score: score.value,
                time: time.valueOf()
            // after the data has been sent to firebase, run fromGameToMenu()
            }).then(() => {
                fromGameToMenu();
            })
        } else {
            alert("score.value was not valid? How did you achieve an invalid score???")
        }
    } else {
        alert("username.value was not valid? How did you get here?");
    }
}

function backToGame() {
    var confirm = document.getElementById("backConfirmation");
    var background = document.getElementById("blackBackground");
    confirm.style.display = "none";
    background.style.display = "none";
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
const username = document.getElementById("usernameInput");
var score = document.getElementById("scoreInput");
// var timeTaken = minutesLabel
const registerPlayBtn = document.getElementById("registerPlayBtn");
// const muskPlayBtn = document.getElementById("muskPlayBtn");
// const bezosPlayBtn = document.getElementById("bezosPlayBtn");
// const zuckerPlayBtn = document.getElementById("zuckerPlayBtn");

// this eventListener will be changed later on so that we send the data to firebase once the player has lost
// and score.value will be calculated as either the amount of money the player obtained in total or 
// the highest amount of money the player obtained
registerPlayBtn.addEventListener("click", (e) => {
    // preventDefault() disables the default behaviour of clicking a type="submit" button, which is to refresh
    // the page which we don't want
    e.preventDefault();
    const enteredUsername = username.value.trim();
    if (username.value && score.value) {
        db.collection("pointsLeaderboard")
            .where("username", "==", enteredUsername)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    alert("Username already exists. Please choose a different username.");
                } else {
                    const time = Date.now();
                    db.collection("pointsLeaderboard").doc(`${time}`).set({
                        username: enteredUsername,
                        time: time,
                        score: parseInt(score.value)
                    }).then(() => {
                        toGameBtn();
                    }).catch((error) => {
                        console.error("Error adding document: ", error);
                    });
                }
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    } else {
        alert("Please enter a valid username and score.");
    }
});

// we'll be using this in the final version
// registerPlayBtn.addEventListener("click", (e) => {
//     // preventDefault() disables the default behaviour of clicking a type="submit" button, which is to refresh
//     // the page which we don't want
//     e.preventDefault();
//     if (username.value) {
//         toGameBtn();
//     } else {
//         alert("Please enter a valid username!");
//     }
// });

function displayScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    const h4 = document.createElement('h4');
    h4.innerHTML = `${humanRead(score)})`
    scoreDisplay.appendChild(h4);
}

// muskPlayBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (username.value && score.value) {
//         db.collection("muskLeaderboard").doc().set({
//             username: username.value,
//             score: score.value,
//             timeTaken: timeTaken.value
//         }).then(() => {
//             toGameBtn();
//         })
//     } else {
//         alert("Please enter a username and score!");
//     }
// });

// bezosPlayBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (username.value && score.value) {
//         db.collection("bezosLeaderboard").doc().set({
//             username: username.value,
//             score: score.value,
//             timeTaken: timeTaken.value
//         }).then(() => {
//             toGameBtn();
//         })
//     } else {
//         alert("Please enter a username and score!");
//     }
// });

// zuckerPlayBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (username.value && score.value) {
//         db.collection("zuckerLeaderboard").doc().set({
//             username: username.value,
//             score: score.value,
//             timeTaken: timeTaken.value
//         }).then(() => {
//             toGameBtn();
//         })
//     } else {
//         alert("Please enter a username and score!");
//     }
// });

// function for creating a timer that counts and displays minutes and seconds
// var minutesLabel = document.getElementById("minutes");
// var secondsLabel = document.getElementById("seconds");
// var totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//     ++totalSeconds;
//     secondsLabel.innerHTML = pad(totalSeconds % 60);
//     minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//     var valString = val + "";
//     if (valString.length < 2) {
//         return "0" + valString;
//     } else {
//         return valString;
//     }
// }