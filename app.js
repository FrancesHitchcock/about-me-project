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
  let userGuess = prompt("Guess my number. You have four attempts.");

  for (let i = 1; i <= 4; i++) {
    console.log(userGuess);
    if (parseInt(userGuess) === secretNumber) {
      alert("correct");
      points++;
      break;
    }

    if (i === 4) {
      alert("you have run out of guesses");
      break;
    }

    if (parseInt(userGuess) < secretNumber) {
      userGuess = prompt("Too low, try again");
    } else {
      userGuess = prompt("Too high, try again");
    }
  }
  console.log(points);
}

function guessAnAnimalILike() {
  const myAnimals = ["crocodile", "hamster", "pig", "cat"];
  let userGuess = prompt(
    "Can you guess one of my favourite animals? You have six attempts."
  );

  for (let i = 1; i <= 6; i++) {
    console.log(userGuess);

    if (myAnimals.includes(userGuess)) {
      alert("correct");
      points++;
      break;
    }

    // for (let j = 0; j < myAnimals.length; j++) {
    //   if (myAnimals[j] === userGuess) {
    //     alert("correct");
    //     points++;
    //     break;
    //   }
    // }

    if (i === 6) {
      alert(
        "you have run out of guesses. My favourite animals are: " +
          myAnimals.join(", ")
      );
      break;
    }

    userGuess = prompt(
      "That's not one of my favourite animals. Have another go"
    );
  }
  console.log(points);
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

// guessMyNumber();

guessAnAnimalILike();

// sayGoodbye();
