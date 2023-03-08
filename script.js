

//function call each api
// separate api each function
//init to call multiple 


var apiKey = '158f9ecd45575b4b5ba983959881d8f3';
var artist = 'Pink Floyd';
var track = 'Comfortably Numb';
var apiUrl = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey}&artist=${artist}&track=${track}&format=json`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data));

//   getApi();


document.getElementById('Facts').addEventListener('click', () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Do something with the data here
    //   console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
  