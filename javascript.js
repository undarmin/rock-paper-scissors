const choices = [...document.querySelectorAll("button")];

const scores = [0 /* player score */ , 0 /* computer score */ ];

choices.forEach(
    (choice) => {
        choice.addEventListener('click', () => {
            console.log(
                decideRound(choice.textContent, getComputerChoice())
                );
        })
    }
)

function getComputerChoice() {
    // code goes here
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