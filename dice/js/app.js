/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class for firstDie (hint: document.getElementById)
* get the second die by ID and update the class for secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been clicked, if it has run the diceRoll function.

*/


function rollDice(){
//generate random numbers
  var random1 = Math.ceil(Math.random() * 6)
  var random2 = Math.ceil(Math.random() * 6)
//form random classes
  var firstDie = "dice-" + random1
  var secondDie = "dice-" + random2
//update classes
  document.getElementById("first-die").className = firstDie;
  document.getElementById("second-die").className = secondDie;
}

//if button clicked, run rollDice function
document.getElementById('roll-dice').onclick = function() {
  rollDice();
 }
