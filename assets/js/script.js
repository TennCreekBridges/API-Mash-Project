// globals


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
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
        })
      }
    })
};

getDadApi();

// Yoda fetch and function
//const yodaApiUrl = "http://yoda-api.appspot.com/api/v1/yodish";

//var getYodaApi = function () {
    //fetch('http://yoda-api.appspot.com/api/v1/yodish')
   // .then((response) => response.json())
   // .then((data) => console.log(data));
//}

//getYodaApi();