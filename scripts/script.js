function getApi() {
    var requestApi = "https://imgflip.com/api"
    fetch(requestApi).then(function (response) {
      return response.json();
      
    })
    .then(function (data) {
      return console.log(data);
    });
  
  }