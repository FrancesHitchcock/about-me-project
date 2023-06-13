"use strict";

console.log("Hi");

let userName = "";
let userGuess1 = "";
let userGuess2 = "";

function getUserName() {
  userName = prompt("Hi, I'm Frances. What would you like me to call you?");
  console.log(userName);
  alert("Great to meet you " + userName + ", I've got a little quiz for you!");
}

function getUserGuess1() {
  userGuess1 = prompt("As a child did I dream of being a dancer?");
  console.log(userGuess1);
  if (userGuess1.toLowerCase() === "no" || userGuess1.toLowerCase() === "n") {
    alert("Well done, '" + userGuess1 + "' is the correct answer!");
  } else if (
    userGuess1.toLowerCase() === "yes" ||
    userGuess1.toLowerCase() === "y"
  ) {
    alert(
      "sorry, that is the wrong answer, I have never wanted to be a dancer."
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess1();
  }
}

function getUserGuess2() {
  userGuess2 = prompt("Are my favourite fruit strawberries?");
  console.log(userGuess2);
  if (userGuess2.toLowerCase() === "yes" || userGuess2.toLowerCase() === "y") {
    alert("Well done, '" + userGuess2 + "' is the correct answer!");
  } else if (
    userGuess2.toLowerCase() === "no" ||
    userGuess2.toLowerCase() === "n"
  ) {
    alert(
      "Sorry, that is the wrong answer, strawberries are my favourite fruit."
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess2();
  }
}

// getUserName();

// getUserGuess1();

// getUserGuess2();
