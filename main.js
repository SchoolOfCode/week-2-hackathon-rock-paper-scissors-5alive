// Our MS1
// --- Welcome to rock paper scissors ---
// An console/alert message that welcomes the user to the game 


console.log("--- Welcome to rock paper scissors ---");




// Overview of rules
// A message: "To make a move you can enter either rock, paper or scissors, i will make my move at the same time."
// Another message: "rock beats scissors, scissor beat paper, paper beats rock, if we make the same move, we both score 0"
// Another message: "Good luck!"


console.log("To make a move you can enter either rock, paper or scissors, i will make my move at the same time.");

console.log("rock beats scissors, scissor beat paper, paper beats rock, if we make the same move, we both score 0");

console.log("Good luck!");


// Prompt the user to enter their first move 
// Store a variable with a message prompt to ask the user whether they could type the words rock/paper/scissors
// let playerChoice = resultofinput


let playerChoice = prompt("Please type either rock, paper or scissors.");

console.log(playerChoice);

// NPC makes their decision
// An array of strings, with the 3 options, "rock", "paper", "scissors"
// npcOptions = ["rock", "paper", "scissors"]





// Create a function that makes the NPC choose one of the 3 options from the array at random and stores that into a variable and returns it
// function npcRandom (npcOptions)

function npcRandom() {
    let npcOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * (3));
    let npcChoice = npcOptions.at(randomNumber);
    console.log(npcChoice)
}
npcRandom();



// npcChoice = resultoffunction


// Compares the choices
// A function that contains the values of the player and the NPC choice, 
// function roundResult(playerChoice, npcChoice)

// and using conditional statements, comparing the values to the winning criteria
// eg If NPC choice and the player choice is equal to one another, the output is a draw, otherwise
// eg NPC chooses "rock" and player selects "scissors", the NPC would win and the player loses
// Variables to potentially return: playerScore | npcScore 

// Computer outputs "paper beats rock" etc
// A console/alert message that informs the user of the result


// Update scores accordingly
// Taken from the return values of the comparison function show the score of 1 for the winner, and 0 for the loser
// Message that includes ${playerScore} and ${npcScore}

// Play again? - prompt
// variable anotherGame (storing boolean yes/no)
// Calling the function to take the player back to the "user first move" sequence
// Use the console.clear command to clear the console before player starts again (maybe inside the play again function)