function getApi() {

    fetch("https://imgflip.com/api", {
      mode: 'no-cors'
    })
    
    .then(function (response) {
      return response.json();
      
    })
    .then(function (data) {
      return console.log(data);
    });
  
  }
  getApi();