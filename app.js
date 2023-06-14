"use strict";

// global variables

let points = 0;
let userName = "";

// declare the functions

function getUserName() {
  userName = prompt("Hi, I'm Frances. What would you like me to call you?");
  alert("Great to meet you " + userName + ", I've got a little quiz for you!");
}

function getUserGuess(question, correct, incorrect, response) {
  let userGuess = prompt(question).toLowerCase();
  let correctAnswer = correct;
  let incorrectAnswer = incorrect;
  let formattedGuess;

  if (userGuess === "yes" || userGuess === "y") {
    formattedGuess = "yes";
  } else if (userGuess === "no" || userGuess === "n") {
    formattedGuess = "no";
  } else {
    formattedGuess = null;
  }

  if (formattedGuess === correctAnswer) {
    alert("Well done, '" + userGuess + "' is the correct answer!");

    // a point is added for each correct answer
    points++;
  } else if (formattedGuess === incorrectAnswer) {
    alert("Sorry, that is the wrong answer, " + response);
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess(question, correct, incorrect, response);
  }
}

function guessMyNumber() {
  // generate a random number between 1 and 20
  const secretNumber = Math.floor(Math.random() * 20 + 1);
  let userGuess = prompt(
    "I am thinking of a number between 1 and 20. You have four attempts to guess it."
  );

  // loop four times, once for each permitted guess
  for (let i = 1; i <= 4; i++) {
    // if the guess is correct an alert is displayed, a point is awarded and the loop breaks
    if (parseInt(userGuess) === secretNumber) {
      alert("Well done, that is the correct answer");
      points++;
      break;
    }

    // on the fourth guess an alert is displayed and the loop breaks
    if (i === 4) {
      alert("you have run out of guesses");
      break;
    }

    // otherwise the user gets another guess
    if (parseInt(userGuess) < secretNumber) {
      userGuess = prompt("Too low, try again");
    } else {
      userGuess = prompt("Too high, try again");
    }
  }
}

function guessAnAnimalILike() {
  const myAnimals = ["crocodile", "hamster", "pig", "cat"];

  // generate a list of these animals as a string
  let animalsList = "";

  for (let i = 0; i < myAnimals.length; i++) {
    if (i === myAnimals.length - 1) {
      animalsList += myAnimals[i] + ".";
    } else if (i === myAnimals.length - 2) {
      animalsList += myAnimals[i] + " and ";
    } else {
      animalsList += myAnimals[i] + ", ";
    }
  }

  let userGuess = prompt(
    "Can you guess one of my favourite animals? You have six attempts."
  ).toLowerCase();

  // loop six times, once for each permitted guess
  for (let i = 1; i <= 6; i++) {
    let isGuessCorrect = false;

    // if the user guesses an animal in the array then the guess is correct
    for (let j = 0; j < myAnimals.length; j++) {
      if (myAnimals[j] === userGuess) {
        isGuessCorrect = true;
      }
    }

    // if the guess is correct an alert is displayed, a point is added and the loop breaks
    if (isGuessCorrect === true) {
      alert("correct");
      points++;
      break;
    }

    // on the sixth guess an alert is displayed and the loop breaks. The list of animals is displayed in an alert
    if (i === 6) {
      alert(
        "you have run out of guesses. My favourite animals are: " + animalsList
      );
      break;
    }

    // otherwise the user gets another guess
    userGuess = prompt(
      "That's not one of my favourite animals. Have another go"
    ).toLowerCase();
  }
}

function sayGoodbye() {
  alert(
    "You have scored " +
      points +
      " points. Nice doing business with you " +
      userName +
      ". See you next time!"
  );
}

// call the functions in order

getUserName();

getUserGuess(
  "As a child did I dream of being a dancer?",
  "no",
  "yes",
  "I have never wanted to be a dancer."
);

getUserGuess(
  "Are my favourite fruit strawberries?",
  "yes",
  "no",
  "I adore strawberries in the summer."
);

getUserGuess(
  "Do I have a pet cat?",
  "no",
  "yes",
  "but I would love to have a pet cat."
);

getUserGuess(
  "Was I born inside the M25 ring road?",
  "no",
  "yes",
  "the M25 didn't exist when I was born."
);

getUserGuess(
  "Do I want a career as a coder?",
  "yes",
  "no",
  "why would I be doing this course if I didn't want to be a coder?!"
);

guessMyNumber();

guessAnAnimalILike();

sayGoodbye();
