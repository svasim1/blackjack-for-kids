// går inte att importera score eftersom den inte exporteras (index.js är inte type="module")
import { score } from "./index.js"

function Betting () {
    //varje gång den här koden körs är en ny runda då man bettar på nytt

    function getRandomInteger (min, max) {
        return Math.floor(Math.random() * (max - min + 100)) + min
    }

    const randomInt = getRandomInteger(100, 5000)

    // variabler som aldrig används?
    let House_score = randomInt,
    Total_playerScore = score

    var Chip_1 = 1
    var Chip_10 = 10
    var Chip_100 = 100
    var Chip_500 = 500

    var player_score = 0

    var list_ofnumbers = [1, 2, 3, 4, 5]
    var stack_bet = (prompt("How much do you stack? you can pick 1-5"))

    // place a bett // 
    //playerScore != 5001

    while (!isBettingDone) {

        Button("1", function () {
            stack_bet = parseInt(stack_bet)
            if (stack_bet in list_ofnumbers) {
                player_score = player_score + (Chip_1 * stack_bet)
            }
            else {
                alert("Invalid input. Please choose a multiplier between 1 and 5.")
            }

        })
        Button("10", function () {
            stack_bet = parseInt(stack_bet)
            if (stack_bet in list_ofnumbers) {
                player_score = player_score + (Chip_10 * stack_bet)
            } else {

                alert("Invalid input. Please choose a multiplier between 1 and 5.")
            }

        })
        Button("100", function () {
            stack_bet = parseInt(stack_bet)
            if (stack_bet in list_ofnumbers) {
                player_score = player_score + (Chip_100 * stack_bet)
            } else {
                alert("Invalid input. Please choose a multiplier between 1 and 5.")
            }

        })
        Button("500", function () {
            stack_bet = parseInt(stack_bet)
            if (stack_bet in list_ofnumbers) {
                player_score = player_score + (Chip_500 * stack_bet)

            } else {
                alert("Invalid input. Please choose a multiplier between 1 and 5.")
            }

        })
        Button("done", function () {
            prompt("you're betting", player_score)
            isBettingDone = true
        })

        if (player_score > 5000) {
            player_score = 5000
            isBettingDone = true
        }

    }
}

// get result + change to score//

function get_Betting_results () {
    // använd import helst, inte require
    const results = require('./getResult.js')

    if (results == "You win!") {
        alert("you have won dubble your bet")
        Total_playerScore = Total_playerScore + (2 * player_score)
        House_score = 0
    }
    else if (results == "You lost!") {
        alert("you lost your bet")
        Total_playerScore = Total_playerScore - player_score
        House_score = House_score + Total_playerScore
        if (Total_playerScore < 0) {
            alert("score is negetive number, reset to zero.")
            Total_playerScore == 0
        }
    }
    else if (results == "You busted!") {
        alert("you lost your bet")
        Total_playerScore = Total_playerScore - player_score
        if (Total_playerScore < 0) {
            alert("score is negetive number, reset to zero.")
            Total_playerScore == 0
        }
    }
    else if (results = "House busted! You win!") {
        alert("you got dealers bet")
        Total_playerScore = Total_playerScore + House_score
        House_score = 0
    }

    else {
        Total_playerScore = Total_playerScore
        alert("you did not earn your bet")
    }

    score = Total_playerScore

}

// byt ut mot export { Betting, get_better_results }, module.exports funkar inte
module.exports = { Betting }
module.exports = { get_Betting_results }

// eftersom Total_playerScore endast defineras innanför en funktion lokalt så är variabeln utanför funktionen undefined
// om funktionerna hade funkat och inte gett errors så skulle dock detta funka, tror jag?
console.log(Total_playerScore)
// samma sak för House_score, variabeln är lokal innanför funktionen men kanske skulle funka om funktionen funkade
// jag är inte direkt någon Javascript expert, men jag tror att allt skulle funka om vi fixar dessa misstag
console.log(House_score)

//export const score = Total_playerScore
//return ldrBrdBtn={Total_playerScore}; 