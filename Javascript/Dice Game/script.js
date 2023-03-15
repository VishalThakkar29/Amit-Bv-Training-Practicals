'use strict';
//initial the content
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const winnerClass = document.querySelector('.winner-class');
const btnRoll = document.querySelector('.btn--roll');

const btnNew = document.querySelector('.btn--new');

const btnHold = document.querySelector('.btn--hold');

//adding starting parameters
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

//function for refactoring our code: switchplayers
const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0; //reset the current score.
  activePlayer = activePlayer === 0 ? 1 : 0; //if activeplayer is 0 then it will change it to 1 otherwise it will keep it same.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    //display dice
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    //now check for the rolled num and update the score
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore; // for selecting the player automatically
      // current1El.textContent = currentScore;
    } else {
      switchplayer();
    }
  }
});

//for hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current scores of the active player
    scores[activePlayer] += currentScore; //score[1]=score[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check score
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      //Finish the Game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the nxt player.
      switchplayer();
    }
  }
});

//reset Button or play again

btnNew.addEventListener('click', init);
