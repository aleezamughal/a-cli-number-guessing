#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate random number
// user input for guessing number
// compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 5 + 1);
  console.log("Greetings!Let's start the number guessing game")

const guessNumber = await inquirer.prompt([{
    name: "userguessedNumber",
    type: "number",
    message: "guess a number between 1-5:",
}]);

if(guessNumber.userguessedNumber === randomNumber){
    console.log("welldone! your guess was accurate.")
}else {
    console.log("your guess was inaccurate");
} 