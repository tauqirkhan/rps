
let win = 0;
let lose = 0;
function game(){
    for(let x = 0; x < 5; x++){
        let playerSelection = prompt("Enter the either rock, paper or scissor ?", "rock").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        console.log(playerRound(playerSelection, computerSelection));
    }
    if(win=>3){
        return "You Won! Best of 5 game";
    }
    if(lose=> 3){
        return "You Lose! Best of 5 game"
    }
}

function playerRound(playerSelection, computerSelection){
    // Make input case-insensitive 
    let player = playerSelection;
    let computer = computerSelection;
    // Return a string that decalres a win or lose of playerSelection
    //set switch statement to true
    switch(true){
    //Player win [Rock beats Scissor]
    case player === 'rock' && computer === 'scissor':
        win++;
        return "You Won! Rock beats Scissor";
        break;
    //Player win [Scissor beats Paper]
    case player === 'scissor' && computer === 'paper':
        win++;
        return "You Won! Scissor beats Paper";
        break;
    //Player win [Paper beat Rock]
    case player === 'paper' && computer === 'rock':
        win++;
        return "You Won! Paper beats Rock";
        break;
    //Player lose [Rock beats Scissor]
    case computer === 'rock' && player === 'scissor':
        lose++;
        return "You Lose! Rock beats Scissors";
        break;
    //PLayer lose [Scissor beats Paper]
    case computer === "scissor" && player === 'paper':
        lose++
        return "You Lose! Scissor beats Paper";
        break;
    //Player lose [Paper beat Rock]
    case computer === "paper" && player === "rock":
        lose++;
        return "You Lose! Paper beats Rock";
        break;
    default:
        // Replay PlayerSelection Function by asking user input
        //And generate another computer input
        computer = getComputerChoice();
        return playerRound(player, computer);
    }
}

function getComputerChoice(){
    //Getting random number between 3 number [0, 1, 2]
    let randomNum = Math.floor(Math.random() * 3);
    //Three options for the desired output
    let options = "rock,paper,scissor";
    // Use split() string method to convert options string into array 
    // and return array split by comma
    let arr = options.split(",");

    //Return array at with randomNum index number
    return arr[randomNum].toLowerCase();
}

console.log(game());
