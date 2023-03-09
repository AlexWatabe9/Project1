

//function call each api
// separate api each function
//init to call multiple 


// var url = "http://numbersapi.com/number/type";


// var random = document.getElementById("random");

// function getApi() {
//     var url = "http://numbersapi.com/42/trivia";

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
// }

// getApi();


// fetch(url)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });



// factButton.addEventListener("click", async () => {
//   var response = await fetch("https://go-apod.herokuapp.com/apod");
//   var fact = await response.text();
//   factDisplay.innerText = fact;
// });
var random = document.getElementById("random-button")

async function fetchJoke() {
    // API endpoint URL
    var url = "https://sv443.net/jokeapi/v2/joke/Any";
  
    // Make API request
    var response = await fetch(url);
  
    // Get the JSON response
    var json_response = await response.json();
  
    // Return the setup and punchline of the joke
    if (json_response["type"] === "twopart") {
      return [json_response["setup"], json_response["delivery"]];
    } else {
      return [json_response["joke"], null];
    }
  }

  // Fetch a random joke from the API
fetchJoke()
.then(([setup, punchline]) => {
  // Display the setup of the joke
  console.log(setup);

  // If the joke is a two-part joke, display the punchline too
  if (punchline) {
    console.log(punchline);
  }
})
.catch((error) => {
  console.error(error);
});

<<<<<<< HEAD
random.addEventListener('click, fetchJoke');
// hello 
=======
random.addEventListener('click, fetchJoke');
>>>>>>> 9d3d18ceb917cbf41661d1144f7a7978cc44444c
