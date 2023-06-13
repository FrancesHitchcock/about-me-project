"use strict";

console.log("Hi");

let userName = "";
let userGuess1 = "";
let userGuess2 = "";
let userGuess3 = "";
let userGuess4 = "";
let userGuess5 = "";

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
      "Sorry, that is the wrong answer, I adore strawberries in the summer."
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess2();
  }
}

function getUserGuess3() {
  userGuess3 = prompt("Do I have a pet cat?");
  console.log(userGuess3);
  if (userGuess3.toLowerCase() === "no" || userGuess3.toLowerCase() === "n") {
    alert("Well done, '" + userGuess3 + "' is the correct answer!");
  } else if (
    userGuess3.toLowerCase() === "yes" ||
    userGuess3.toLowerCase() === "y"
  ) {
    alert(
      "Sorry, that is the wrong answer, but I would love to have a pet cat."
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess3();
  }
}

function getUserGuess4() {
  userGuess4 = prompt("Was I born inside the M25 ring road?");
  console.log(userGuess4);
  if (userGuess4.toLowerCase() === "no" || userGuess4.toLowerCase() === "n") {
    alert("Well done, '" + userGuess4 + "' is the correct answer!");
  } else if (
    userGuess4.toLowerCase() === "yes" ||
    userGuess4.toLowerCase() === "y"
  ) {
    alert(
      "Sorry, that is the wrong answer, the M25 didn't exist when I was born."
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess4();
  }
}

function getUserGuess5() {
  userGuess5 = prompt("Do I want a career as a coder?");
  console.log(userGuess5);
  if (userGuess5.toLowerCase() === "yes" || userGuess5.toLowerCase() === "y") {
    alert("Well done, '" + userGuess5 + "' is the correct answer!");
  } else if (
    userGuess5.toLowerCase() === "no" ||
    userGuess5.toLowerCase() === "n"
  ) {
    alert(
      "Sorry, that is the wrong answer, why would I be doing this course if I didn't want to be a coder?!"
    );
  } else {
    alert("please answer using 'yes/y' or 'no/n'");
    getUserGuess5();
  }
}

getUserName();

getUserGuess1();

getUserGuess2();

getUserGuess3();

getUserGuess4();

getUserGuess5();
