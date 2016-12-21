/*
- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.
- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.
*/

'use strict';
(function() {
  var httpRequest;

  var $button1 = document.querySelector("#getDataButton");
  var $button2 = document.querySelector("#getCustomDataButton");

  $button1.onclick = function() {
    buttonRequest('http://data.consumerfinance.gov/api/views.json');
  };

  $button2.onclick = function() {
    //buttonRequest('http://jsonplaceholder.typicode.com');
    buttonRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');
  }

  function buttonRequest(url) {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url);
    httpRequest.send();
  }


  function responseMethod() {
    // Check if our state is "DONE"
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // If our request was successful we get a return code/status of 200
      if (httpRequest.status === 200) {
        // This is where we update our UI accordingly. Our data is available to us through the responseText parameter
        var jsonResponse = JSON.parse(httpRequest.responseText)
        console.log(jsonResponse);
      } else {
        // This is the scenario that there was an error with our request
        console.log('There was a problem with the request.');
      }
    }
  }

  // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
})();
