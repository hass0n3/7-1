// This code will display a message if the user correctly guesses the random number
let userGuess = 0
let randomNumber = 0

document.getElementById('button').addEventListener('click', randomizer)

function randomizer () {
  // convert userGuess to integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // generate random number
  randomNumber = Math.floor(Math.random() * 6) + 1

  // compare user's guess to random number
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'You guessed ' + userGuess + '. That is correct!'
  }
}