"use strict";

let points = 0;
let userName = "";

// let userGuess;

function getUserName() {
  userName = prompt("Hi, I'm Frances. What would you like me to call you?");
  console.log(userName);
  alert("Great to meet you " + userName + ", I've got a little quiz for you!");
}

function getUserGuess(question, correct, incorrect, response) {
  let userGuess = prompt(question).toLowerCase();
  let correctAnswer = correct;
  let incorrectAnswer = incorrect;
  let formattedGuess;

  //   console.log(userGuess);

  if (userGuess === "yes" || userGuess === "y") {
    formattedGuess = "yes";
  } else if (userGuess === "no" || userGuess === "n") {
    formattedGuess = "no";
  } else {
    formattedGuess = null;
  }

  if (formattedGuess === correctAnswer) {
    alert("Well done, '" + userGuess + "' is the correct answer!");
    points++;
  } else if (formattedGuess === incorrectAnswer) {
    alert("Sorry, that is the wrong answer, " + response);
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess(question, correct, incorrect, response);
  }

  console.log(points);
}

function guessMyNumber() {
  const secretNumber = 4;

  let userNumber = prompt(
    "Can you guess my secret number? It is a whole number between 1 and 20. You have four attempts!"
  );
  console.log(typeof userNumber);
  // while(userNumber !== secretNumber)
}

function sayGoodbye() {
  alert("Nice doing business with you " + userName + ". See you next time!");
}

// getUserName();

// getUserGuess(
//   "As a child did I dream of being a dancer?",
//   "no",
//   "yes",
//   "I have never wanted to be a dancer."
// );

// getUserGuess(
//   "Are my favourite fruit strawberries?",
//   "yes",
//   "no",
//   "I adore strawberries in the summer."
// );

// getUserGuess(
//   "Do I have a pet cat?",
//   "no",
//   "yes",
//   "but I would love to have a pet cat."
// );

// getUserGuess(
//   "Was I born inside the M25 ring road?",
//   "no",
//   "yes",
//   "the M25 didn't exist when I was born."
// );

// getUserGuess(
//   "Do I want a career as a coder?",
//   "yes",
//   "no",
//   "why would I be doing this course if I didn't want to be a coder?!"
// );

guessMyNumber();

// sayGoodbye();
