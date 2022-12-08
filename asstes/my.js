


// const weatherApi = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=9ae65e07b51d7c7d559b20d779c9b073&units=metric'
//     const response = await fetch(weatherApi);
//     const data = await response.json();
    var searched=[""]
        var getLocalWeather= function(){ 
            var cityaa = $(this).attr('value');
            var CityApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityaa}&appid=9ae65e07b51d7c7d559b20d779c9b073&units=metric`;
          fetch(CityApi)
          .then(function (response) {
                if (response.ok) {
                  console.log(response);
                  response.json().then(function (data) {
                    console.log(data);
                  });
                }
            })
        };
        function renderButtons() {

    
            
            for (var i = 0; i < searched.length; i++) {
        
                // dynamicaly generate buttons for each city in our array
                // $('#Append').empty()
                var a = $("<button>")
                // adding a class of movie-btn to the button
                a.addClass("SearchedCities");
                // add a data-attribute
                a.attr('data-name', searched[i])
                // providint text for the button
                a.text(searched[i]);
                // adding the button to the BUTTONS-VIIW DIV
                $("#Append").append(a);
            }
        }


        $('#btn1').on("click", function () {
    localStorage.setItem('City', $("#city").val());
   var x = document.querySelector("#city").value
   searched.push(x)
   
   renderButtons()
   console.log(searched)
})
// function listSearchedCity() {
    
// var repoEl = document.createElement('p');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';
//     repoEl.textContent = v;

//     x.appendChild(repoEl);


// }
//when the user clciks the botton there choices will be set to an orderder list on this side of middle display.
//wHEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
//  function format (data) {
//     const {name} = data;
//     const { temp, humidity } = data.main;
//     const {icon,description } = data.weather[0];
//     const {speed } = data.wind;
// }
