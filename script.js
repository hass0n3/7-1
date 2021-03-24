// These are the variables we will need for the program.
let randNumb = 0
let userNumb = 0

// This script will link our button to JavaScript.
document.getElementById('button1').addEventListener('click', generate)
document.getElementById('button2').addEventListener('click', repeat)

// This script will take the user's number and make it into an integer, rather than a character.
function generate () {
  userNumb = document.getElementById('text1').value
  userNumb = parseInt(userNumb)
  // Now, it will generate a random integer.
  randNumb = Math.floor(Math.random() * 6) + 1
  randNumb = parseInt(randNumb)
  // This script will need to compare the numbers, so it needs if statements.
  if (userNumb === randNumb) {
    document.getElementById('results').innerHTML = 'Numbers matched! You win!'
  }
  if (userNumb !== randNumb) {
    document.getElementById('results').innerHTML = 'The numbers did not match! Try a different number.'
  }
}

function repeat () {
  if (userNumb !== randNumb) {
    document.getElementById('results').innerHTML = ' '
  }
  if (userNumb === randNumb) {
    document.getElementById('results').innerHTML = ' '
  }
}