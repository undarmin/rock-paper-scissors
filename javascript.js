const choices = [...document.querySelectorAll("button")];
let funcDecl = 0; // how many times decideRound() has been declared

const scores = [0 /* player score */ , 0 /* computer score */ ];

choices.forEach(
    (choice) => {
        choice.addEventListener('click', () => {
            const roundResult = 
            decideRound(choice.textContent, getComputerChoice());
            scores[roundResult[1]]++;
            console.log(roundResult, scores);
        })
    }
)

function getComputerChoice() {
    const randomNumber = Math.random();
    const computerChoice = 
    (randomNumber < 0.33) ? "Rock" :
    (randomNumber < 0.66) ? "Paper" :
    "Scissors";
    return computerChoice;
}

function decideRound(userChoice, computerChoice) {
    if (
        (userChoice === "Rock" && computerChoice === "Scissors")
        || (userChoice === "Paper" && computerChoice === "Rock")
        || (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return [`You chose ${userChoice}, the computer chose ${computerChoice
        }. You win!`, 0];
    } else if (
        (userChoice === "Rock" && computerChoice === "Paper")
        || (userChoice === "Paper" && computerChoice === "Scissors")
        || (userChoice === "Scissors" && computerChoice === "Rock")
    ) {
        return [`You chose ${userChoice}, the computer chose ${computerChoice
        }. You lose!`, 1];
    } else {
        return [`It's a tie! You chose ${userChoice
        }, the computer chose ${computerChoice}.`, undefined]
    }
}