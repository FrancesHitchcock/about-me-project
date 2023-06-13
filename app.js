"use strict";

console.log("Hi");

let userName = "";
let fruitAnswer = "strawberries";
let teachingAnswer = "primary";

function getUserName() {
  userName = prompt("Hi, I'm Frances. What would you like me to call you?");
  console.log(userName);
  alert("Great to meet you " + userName + ", I've got a little quiz for you!");
}

getUserName();
