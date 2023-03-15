'use strict';
// //querry selector
// console.log(document.querySelector('.message').textContent);
// //Dom manipulation

// document.querySelector('.number').textContent = '18';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '20';

let num = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess); //the output is string so u need to convert it to Number
  if (!guess || guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Plz Enter Number between 1 to 20';
  }
  //If wins
  else if (guess === num) {
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //if large num
  else if (guess > num) {
    if (score > 1) {
      displayMessage('Too High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //if less
  else if (guess < num) {
    if (score > 1) {
      displayMessage('Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});
