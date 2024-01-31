const choices = [...document.querySelectorAll("button")];
let funcDecl = 0; // how many times decideRound() has been declared
                  // to decide if game has been over by !(funcDecl % 5)

const scores = [0 /* player score */ , 0 /* computer score */ ];

const resultDisplay = document.querySelector('#result-display');
const scoreDisplay = document.querySelector('#point-display');

choices.forEach(
    (choice) => {
        choice.addEventListener('click', () => {
            const roundResult = 
            decideRound(choice.textContent, getComputerChoice());
            scores[roundResult[1]]++;
            funcDecl++;
            console.log(roundResult, scores, funcDecl);
            let resultText;

            if ((funcDecl % 5 == 0)) {
                resultText = ((scores[0] > scores[1]) 
                ? "You win!"
                : (scores[0] < scores[1]) ? "You lose!" : "Tie!") +
                " To play again, just select your choice!";
                display(resultText, scores);
                scores[0] = scores[1] = 0;
            } else {
                resultText = roundResult[0];
                display(resultText, scores);
            }

            console.log(resultText);
            
        })
    }
)

function display(resultText, scores) {
    resultDisplay.textContent = resultText;
    scoreDisplay.textContent = `Player: ${scores[0]
    }, Computer: ${scores[1]}`;
}

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