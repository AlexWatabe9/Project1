// git add .
// git commit -m ""
// git push origin {branch name} 


// git status (checks the branch you are on )
// git switch {name of branch} (will tell you the name of your branch)

//function call each api
// separate api each function
//init to call multiple 


var url = "http://numbersapi.com/number/type";
var random = document.getElementById("random");

fetch('http://numbersapi.com/number/trivia')
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.error(error);
    });


getApi()
// factButton.addEventListener("click", async () => {
//   var response = await fetch("https://go-apod.herokuapp.com/apod");
//   var fact = await response.text();
//   factDisplay.innerText = fact;
// });
