function getComputerChoice() {
    const randomNumber = Math.random();
    let response;
    if (randomNumber < 0.33) {
        response = "rock"
    } else if (randomNumber < 0.66) {
        response = "paper"
    } else {
        response = "scissors"
    }
    return response;
}

function capitalizeFirstlowerRest(string) {
    return string.slice(0, 1).toUpperCase() +
    string.slice(1, string.length).toLowerCase();
}

function decideRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")) {
        return (`You win! The computer chose ${
capitalizeFirstlowerRest(computerSelection)} and you chose ${
capitalizeFirstlowerRest(playerSelection)}`);
    } else if ((playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock")) {
        return (`You lose (I think AIs will take over)! The computer chose ${
            capitalizeFirstlowerRest(computerSelection)} and you chose ${
            capitalizeFirstlowerRest(playerSelection)}`);
    } else {
        return (`It is a tie! The computer chose ${
            capitalizeFirstlowerRest(computerSelection)} and you chose ${
            capitalizeFirstlowerRest(playerSelection)}`);
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Enter your choice (Rock, Paper or Scissors)");
    if (!(playerSelection.toLowerCase() == "rock" 
    || playerSelection.toLowerCase() == "paper"
    || playerSelection.toLowerCase() == "scissors")) {
        alert("INCORRECT SELECTION, SELECT ONE OF THE THREE OPTIONS (Rock, Paper or Scissors)")
        return getPlayerChoice();
        
    } else {
        // console.log(playerSelection);
        return playerSelection;
    }
}

function playRound(computerScore, playerScore) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice()
    let result = decideRound(playerSelection.toLowerCase(), computerSelection);
    alert(result);
    if (checkScore(computerSelection, playerSelection, result) === 1) {
        playerScore++;
    } else if (checkScore(computerSelection, playerSelection, result) === -1) {
        computerScore++
    }
    alert(`Your points: ${playerScore}, computer points: ${computerScore}.`)
    return [computerScore, playerScore]
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let rez = (playRound(computerScore, playerScore))
    computerScore = rez[0];
    playerScore = rez[1];

    rez = (playRound(computerScore, playerScore))
    computerScore = rez[0];
    playerScore = rez[1];

    rez = (playRound(computerScore, playerScore))
    computerScore = rez[0];
    playerScore = rez[1];

    rez = (playRound(computerScore, playerScore))
    computerScore = rez[0];
    playerScore = rez[1];

    rez = (playRound(computerScore, playerScore))
    computerScore = rez[0];
    playerScore = rez[1];

    
    if (computerScore > playerScore) {
        alert("Computer wins! The AI dominance seems too close for comfort...");
    } else if (computerScore < playerScore) {
        alert("You win!");
    } else {
        alert("It's a tie! Watch your back, the computers are starting to become sentient");
    }
}

function checkScore(computerSelection, playerSelection, result) {
    if (result === (`You win! The computer chose ${
        capitalizeFirstlowerRest(computerSelection)} and you chose ${
        capitalizeFirstlowerRest(playerSelection)}`)) {
            return 1;
        } else if (result === (`You lose (I think AIs will take over)! The computer chose ${
            capitalizeFirstlowerRest(computerSelection)} and you chose ${
            capitalizeFirstlowerRest(playerSelection)}`)) {
                return -1;
            } else {
                return 0;
            }
}