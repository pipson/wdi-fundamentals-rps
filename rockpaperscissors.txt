////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove = getInput(move);
    if(isNAN(playerMove)){
           if(playerMove !==" "){
         switch(playerMove){
            case"rock":
                playerMove; 
                break;
            case "paper":
                playerMove;
                break;
            case "scissors":
                playerMove;
                break;
            default:
            console.log("Input Wrong");
         }
    
    }
    
    }
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   // return /* Your Expression */;
    var computerMove = randomPlay(move);
        if(isNAN(computerMove)){
           if(playerMove !==" "){
         switch(computerMove){
            case"rock":
                computerMove; 
                break;
            case "paper":
                computerMove;
                break;
            case "scissors":
                computerMove;
                break;
            default:
            console.log("Input Wrong");
         }
    
    }
    return computerMove;
    }
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    var tie;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove==="rock" && computerMove==="scissors"){
        winner=playerWins;
    }
    elseif(playerMove==="rock" && computerMove==="paper"){
        winner=computerWins;
        
    }
    elseif(playerMove==="scissors" && computerMove==="rock"){
        winner=computerWins;
    }
    elseif(playerMove==="scissors" && computerMove==="paper"){
        winner=playerWins;
        
    }
    elseif(playerMove==="paper" && computerMove==="scissors"){
        winner=computerWins;
    }
    elseif(playerMove==="paper" && computerMove==="rock"){
        winner=playerWins;
    }
    else {
        winner=tie;
    }
   
return winner;

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var i,winn;
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
     
    for(i=0;i<5;i++){
        while(winner=="true"){
        winn = getWinner(winner);
        if(winn==playerWins){
            playerWins += playerWins;
        }
        elseif(winn==computerWins){
            computerWins = computerWins+1;
        }
        else{
            console.log("The Game is a Tie!");
            }
        }
        }
    return [playerWins, computerWins];
}

