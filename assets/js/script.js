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
  // delete content of previous Yoda'd Joke each time the Generate Joke button is clicked
  yodaJokeEl.textContent = "";
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
    // kickback if user fails to generate a joke prior to clicking Get Yoda'd button
    if (favJoke === "") {
      console.log("error");
      return;
    };
    savedJokes.push(favJoke);
    localStorage.setItem("joke", JSON.stringify(savedJokes));
    // display localStorage array in Favorite Yoda'd Jokes column with line breaks
    favArrayEl.innerHTML = savedJokes.join(`"<br/><hr color="#44dd2b">"`);
    // delete content of DadzJoke and Yoda'd Joke columns when Add to Favorites button is clicked 
    yodaJokeEl.textContent = "";
    dadJokeEl.textContent = "";
}; 

// reset localStorage function
var resetAll = function () {
  yodaJokeEl.textContent = "";
  dadJokeEl.textContent = "";
  favArrayEl.textContent = "";
  localStorage.clear();
  console.log("cleared saved data");
};

// play lightsaber sound on Get Yoda'd button click
var playLightsaber = function () {
  document.getElementById("lsPlay").play();
};

// play 2nd lightsaber sound on Add to Favorites button click
var playZoom = function () {
  document.getElementById("zoomPlay").play();
};

// eventListener for Generate Joke button
jokeButtonEl.addEventListener("click", getDadApi);

// eventListener for Get Yoda'd button
yodaButtonEl.addEventListener("click", getYodaApi);

// eventListener for Add to Favorites button
favButtonEl.addEventListener("click", saveFavorites);

// eventListener for Reset button
resetButtonEl.addEventListener("click", resetAll);