#! /usr/bin/env node 

import inquirer from "inquirer";

// Compiler will generate a random number 

// User input for guessing number 
    
// compare user input with computer generated number  and show result   


//  Yeh math.random k ander 1 to 10 number generate kar k dega lekin 1 sy start kary ga
const randomNumber = Math.floor(Math.random() * 6 + 1)

console.log("\n Welcome to number guessing game\n");

const answer = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        message: "please guess a number between 1-6: ",
        type: "number"
    }
])

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you  guessed right number");
    
} else {
    console.log("You guessed wrong number");
    
}

console.log("The End");
