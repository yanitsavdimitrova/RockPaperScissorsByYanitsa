function games(input) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let playerTurn = input[0];
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerTurn = "";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
        console.log(`You choose ${playerTurn}`);
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
        console.log(`You choose ${playerTurn}`);
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
        console.log(`You choose ${playerTurn}`);
    } else {
        console.log("Invalid Input.Try Again... :(");
    }
    switch (computerRandomNumber) {
        case 1: computerTurn = rock;
            break;
        case 2: computerTurn = paper;
            break;
        case 3: computerTurn = scissors;
            break;

    }
    console.log(`The computer chooses ${computerTurn}`);
    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log("You win!");
    } else if ((playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn == scissors) || (playerTurn === scissors && computerTurn === rock)) {
        console.log("You lose!");
    } else {
        console.log("This game was a draw!");
    }
}
games("scissors");

