/* Independent Practice
Making a favorites list: DOM manipulation
- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)
- Also, when a new item is added to the list, clear the input box.
*/

function addToList(list, newThing) {
  var newThingList = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  newThingList.appendChild(newThingText);
  list.appendChild(newThingList);
}

window.onload = function() {
  // Attach an event listener to when the button is clicked.
  var button = document.querySelector("#new-thing-button");

  var thingList = document.querySelector('#fav-list');
  var newThingAdded = document.querySelector('#new-thing');

  // Inside the function for the button click event, run code when someone clicks the button...
  // Use event.preventDefault() inside your function or the page will reload whenever you click the button
  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingAdded.value;
    addToList(thingList, newThing);

    newThingInput.value = "";
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
};

/*
Bonus:
When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)
*/
