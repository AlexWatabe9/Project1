// git add .
// git commit -m ""
// git push origin {branch name} 


// git status (checks the branch you are on )
// git switch {name of branch} (will tell you the name of your branch)


// var apiKey
// $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//     $('#number').text(data);
// });



var url = "http://numbersapi.com/number/type";
var random = document.getElementById("random");
// var factDisplay = document.getElementById("fact-display");

// factButton.addEventListener("click", async () => {
//     .then {
//         var response = await fetch(url);
//         var imageData = await response.data();
//         console.log(imageData);
//         // Do something with the image data, e.g. display it in an <img> element
//         // factDisplay.src = URL.createObjectURL(imageData);
//     } catch (error) {
//         console.error(error);
//     }
// });

fetch('http://numbersapi.com/number/trivia')
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.error(error);
    });



// var factButton = document.getElementById("fact-button");
// var factDisplay = document.getElementById("fact-display");

// fetch('https://go-apod.herokuapp.com/apod')
//   .then(function(response) {
//     // return response.text();
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });
// //   (function(factDisplay){
// //   console.log(data)
// //   })
// factButton.addEventListener("click", async () => {
//   var response = await fetch("https://go-apod.herokuapp.com/apod");
//   var fact = await response.text();
//   factDisplay.innerText = fact;
// });
// function getApi();