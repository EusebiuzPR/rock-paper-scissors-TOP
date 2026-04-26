console.log("Hello World!s")

function getComputerChoice() {
    const rpsr = [ "rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3)
    return rpsr[index]
}

function getHumanChoice() {
    let rps = prompt("Choose Rock Paper or Scissors").toLowerCase();
    return rps
}




function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return "tie"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        
        console.log("Brains beat CPU")
        return "human"
    } else {
        
        console.log("CPU beats Brain")
        return "computer"
    } 
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


// Crea una funcion para playGame
// Mueve la funcion playRound y score para adentro de playGame
//  tienes que llamar playRound 5, 1 por round


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let result1 = playRound(getHumanChoice(), getComputerChoice());
    let result2 = playRound(getHumanChoice(), getComputerChoice());
    let result3 = playRound(getHumanChoice(), getComputerChoice());
    let result4 = playRound(getHumanChoice(), getComputerChoice());
    let result5 = playRound(getHumanChoice(), getComputerChoice());

    if (result1 === "human") {
        humanScore++
    } else if (result1 === "computer") {
        computerScore++
    }

    if (result2 === "human") {
        humanScore++
    } else if (result2 === "computer") {
        computerScore++
    }

    if (result3 === "human") {
        humanScore++
    } else if (result3 === "computer") {
        computerScore++
    }

    if (result4 === "human") {
        humanScore++
    } else if (result4 === "computer") {
        computerScore++
    }

    if (result5 === "human") {
        humanScore++
    } else if (result5 === "computer") {
        computerScore++
    }

    if (humanScore > computerScore) {
    console.log("Brain beats CPU");
} else if (computerScore > humanScore) {
    console.log("CPU beats brain");
} else {
    console.log("It's a tie!");
}
}
playGame();
