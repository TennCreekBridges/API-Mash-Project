// globals
var dadJokeEl = document.querySelector("#dad-joke");
var yodaJokeEl = document.querySelector("#yoda-joke");
var yodaButtonEl = document.querySelector("#yodaBtn");

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
        console.log(data.joke);
        dadJokeEl.textContent = data.joke;
      })
    }
  })
};

getDadApi();

//Yoda fetch and function
const yodaApiUrl = "http://yoda-api.appspot.com/api/v1/yodish";

var getYodaApi = function (joke) {
  fetch(`http://api.funtranslations.com/translate/yoda?text=${joke}`)
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        var yodaJoke = dadJokeEl.textContent;
        console.log(data);
        console.log(yodaJoke);
        yodaJokeEl.textContent = data.contents;
      })
    }
  })
};

//(how to store the joke) or dadJokeEl.textContent

//create eventListener that contains call function below
yodaButtonEl.addEventListener("click", getYodaApi);

//getYodaApi();