// globals
var jokeButtonEl = document.querySelector("#jokeGenBtn");
var dadJokeEl = document.querySelector("#dad-joke");
var yodaJokeEl = document.querySelector("#yoda-joke");
var yodaButtonEl = document.querySelector("#yodaBtn");
var favButtonEl = document.querySelector("#favBtn");
var favArrayEl = document.querySelector("#favorite-joke");
var resetButtonEl = document.querySelector("#resetBtn");

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

// Yoda fetch and function
const yodaApiUrl = "https://yoda-api.appspot.com/api/v1/yodish";

var getYodaApi = function () {
  var dadJoke = dadJokeEl.textContent;
  fetch("https://api.funtranslations.com/translate/yoda?text=" + dadJoke, {
    headers: {
    'X-FunTranslations-Api-Secret':'mPqv2MIF19lKUc1Ie24R5geF'
  }
})
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
        // save translated jokes to Yoda'd Joke column
        yodaJokeEl.textContent = data.contents.translated;
      })
    }
  })
};

// save favorited jokes to array in localStorage
var saveFavorites = function() {
  var savedJokes = JSON.parse(localStorage.getItem("joke"));
    if (savedJokes === null) {
      savedJokes = [];
    }
    var favJoke = yodaJokeEl.textContent;
    savedJokes.push(favJoke);
    localStorage.setItem("joke", JSON.stringify(savedJokes));
    console.log(localStorage.getItem("joke"));
    // display localStorage array in Favorite Yoda'd Jokes column
    favArrayEl.textContent = savedJokes.join("; ");
};

// reset localStorage function
var resetAll = function () {
  localStorage.clear();
  console.log("cleared saved data");
};

// eventListener for Generate Joke button
jokeButtonEl.addEventListener("click", getDadApi);

// eventListener for Get Yoda'd button
yodaButtonEl.addEventListener("click", getYodaApi);

// eventListener for Add to Favorites button
favButtonEl.addEventListener("click", saveFavorites);

// eventListener for Reset button
resetButtonEl.addEventListener("click", resetAll);