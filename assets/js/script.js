// globals
var dadJokeEl = document.querySelector("#dad-joke");

// dad joke fetch and function
const dadApiUrl = "https://icanhazdadjoke.com";

var getDadApi = function () {
    fetch(dadApiUrl, {
        headers: {
          Accept: "application/json"
        }
      })
    .then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
         console.log(data);
           var listJoke = document.createElement('p');
           listJoke.textContent = data.joke;
           dadJokeEl.appendChild(listJoke);
        })
      }
    })
};

getDadApi();

//Yoda fetch and function
const yodaApiUrl = "http://yoda-api.appspot.com/api/v1/yodish";

var getYodaApi = function () {
  fetch("http://api.funtranslations.com/translate/yoda?text=")
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
      })
    }
  })
};

//getYodaApi();