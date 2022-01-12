'use strict';
/* 
console.log(document.querySelector('.message').textContent); //reading the content of index file with class message..
document.querySelector('.message').textContent = 'Correct Number!🎉'; //here class message from index.html get encounter using document.querySelector('.message') and sets the text as 'Correct Number!🎉' which is again selected using .textContent
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   //   console.log(guess);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   }
// });
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const numberTextContent = function (secret) {
  document.querySelector('.number').textContent = secret;
};
const stylingNumber = function (value) {
  document.querySelector('.number').style.width = value;
};
//document.querySelector('.number').textContent = secretNumber;//shows the seret number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('🎉Guess a number!');
    //document.querySelector('.message').textContent = '🎉Guess a number!';
    //when the player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess!');
    //document.querySelector('.message').textContent = 'Correct Guess!';
    //document.querySelector('.number').textContent = secretNumber;
    numberTextContent(secretNumber);
    score++;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // document.querySelector('.score').textContent = score;
    setScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';

    // document.querySelector('.number').style.width = '30rem';
    stylingNumber('30rem');
  }
  //   else if (guess !== secretNumber) {
  //     document.querySelector('.message').textContent = 'Wrong Guess!';
  //   }
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      // guess > secretNumber ? '📈Too high!' : '📉Too low!';
      score--;
      //document.querySelector('.score').textContent = score;
      setScore(score);
    } else {
      displayMessage('😢You loose the game ');
      //document.querySelector('.message').textContent = '😢You loose the game ';
      // document.querySelector('.score').textContent = 0;
      setScore(0);
    }
  }

  //when the guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢You loose the game ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when the guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too low!'; //why .value instead of .textContent dont work here...
  //       score--;
  //       //console.log(score, typeof score);
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢You loose the game ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  setScore(score);
  // document.querySelector('.number').textContent = '?';
  numberTextContent('?');
  document.querySelector('.guess').value = '';

  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';

  // document.querySelector('.number').style.width = '15rem';
  stylingNumber('15rem');
});
*/
// Code after Refactoring the avove code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const numberTextContent = function (secret) {
  document.querySelector('.number').textContent = secret;
};
const stylingNumber = function (value) {
  document.querySelector('.number').style.width = value;
};
const setBackgroundColor = function (colorvalue) {
  document.querySelector('body').style.backgroundColor = colorvalue;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('🎉Guess a number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Guess!');
    numberTextContent(secretNumber);
    score++;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    setScore(score);
    //document.querySelector('body').style.backgroundColor = '#60b347';
    setBackgroundColor('#60b347');
    stylingNumber('30rem');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('😢You loose the game ');
      setScore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  setScore(score);
  numberTextContent('?');
  document.querySelector('.guess').value = '';
  const guess = Number(document.querySelector('.guess').value);
  // document.querySelector('body').style.backgroundColor = '#222';
  setBackgroundColor('#222');
  stylingNumber('15rem');
});
