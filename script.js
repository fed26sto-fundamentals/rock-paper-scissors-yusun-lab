let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    
    const choice = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choice.length);
    return choice[randomNumber];
}
//let user_answer = "";
function getHumanchoice() {
    let user_answer = "";
    user_answer = prompt("Enter user's choice:");
    if (user_answer != null)
        user_answer = user_answer.toLowerCase();
    if (user_answer === "rock" || user_answer === "paper" || user_answer === "scissors") {
        return user_answer;
    }
    else {
        console.log("Enter a valid choice.");
        return getHumanchoice();
    }
}
//console.log(getHumanchoice());

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();
    // console.log("humanChoice--", humanChoice);
    computerChoice = computerChoice.toLowerCase();
    // console.log("computerChoice--", computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Its a tie, Both have choosen " +humanChoice);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++,
        console.log("Human beats Computer, Human have choosen "+humanChoice+" Computer has choosen "+computerChoice);
    }
    else {
        computerScore++;
        console.log("computer beats human, Human have choosen "+humanChoice+" Computer has choosen "+computerChoice);
    }

}


function playGame() {
    // let humanScore = 0;
    // let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanchoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore ){
        console.log("Human is winning and score is, Human: "+humanScore+" Computer: "+computerScore);
        // console.log("Human is winning");
    }
    else if(computerScore > humanScore){
        console.log("computer is winning and score is, Human: "+humanScore+" Computer: "+computerScore);
    }
    else{
        console.log("its a tie and score is Human: "+humanScore+" Computer: "+computerScore);
    }
}
//Start the Game
playGame();




