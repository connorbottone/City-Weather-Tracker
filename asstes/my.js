var apiHttps =  'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=9ae65e07b51d7c7d559b20d779c9b073'
//grab all files from html that will be inouting and diplaying data


fetch(apiHttps)
.then(function(response){
    return response.json();

})
.then(function(data) {
    console.log(data)
});