
let win = 0;
let lose = 0;


let score = document.querySelector('.score');

const winScore = document.createElement('h1');
const loseScore = document.createElement('h1');

score.appendChild(winScore);
score.appendChild(loseScore);


function playerRound(playerSelection, computerChoice){
    let player = playerSelection;
    let computer = computerChoice;
    
    switch(true){
    case player === 'rock' && computer === 'scissor':
        win++;
        return "You Won! Rock beats Scissor";
        break;
    case player === 'scissor' && computer === 'paper':
        win++;
        return "You Won! Scissor beats Paper";
        break;
    case player === 'paper' && computer === 'rock':
        win++;
        return "You Won! Paper beats Rock";
        break;
    case computer === 'rock' && player === 'scissor':
        lose++;
        return "You Lose! Rock beats Scissors";
        break;
    case computer === "scissor" && player === 'paper':
        lose++
        return "You Lose! Scissor beats Paper";
        break;
    case computer === "paper" && player === "rock":
        lose++;
        return "You Lose! Paper beats Rock";
        break;
    default:
        //It was a tie match so needed
        return 'It was a tie, Play again';
    }
}

function getComputerChoice(){
    let randomChoiceIndex = Math.floor(Math.random() * 3);
    let choices = "rock,paper,scissor";
    let choiceArray = choices.split(",");

    return choiceArray[randomChoiceIndex];
}


let buttons = document.querySelectorAll('button');

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        let result = playerRound(playerSelection, getComputerChoice());

        winScore.textContent =  `Your winning score: ${win}`;
        loseScore.textContent = `Your losing score: ${lose}`;

        if(win >= 5) {
            winScore.textContent = 'You won!';
            loseScore.textContent = '';
            win = 0;
            lose = 0;
        }

        if(lose >= 5){
            winScore.textContent = '';
            loseScore.textContent = 'You lose';
            lose = 0;
            win = 0;
        }

        let text = document.querySelector('.result');
        const p = document.createElement('p');
        p.textContent = result;

        text.appendChild(p);

    });
})


