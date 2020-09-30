/* Game Rules
- player must guess a number set between min and max
- player has a limited number os tries
- Notifiy remaining guesses
- Notify player of success
- Notify player of failures
- player can retry the game
*/

// Start creating the variables

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UIresultMsg = document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Add event listener
UIguessBtn.addEventListener('click', () => {
  // parse string to int
  let guess = parseInt(UIguessInput.value);

  // validate the guess
  if(guess < min || guess > max || isNaN(guess)){    
    setMessage(`Your guess must be a number between ${min} and ${max}`, 'red');
  } else {
    setMessage(`You guessed ${guess}`, 'green');
  }

  // check if won
  if(guess === winningNum){
    // disable input
    UIguessInput.disabled = true;
    setMessage(`Congrats, ${winningNum} is correct! You won with ${guessesLeft} guesses left!`, 'green');
  } else {
    guessesLeft -= 1;
    UIguessInput.style.borderColor = 'red';
    setMessage(`${guess} is a wrong guess, you have ${guessesLeft} guesses left.`, 'red');
  }

  // lock down if failure
  if (guessesLeft === 0){
    UIguessInput.disabled = true;
    UIguessBtn.disabled =  true;
  }
})

function setMessage(msg, color){
  UIresultMsg.textContent = msg;
  UIresultMsg.style.color = color;
}