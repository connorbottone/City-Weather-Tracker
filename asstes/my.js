var mainTemp = document.querySelector('.temperature')
var mainSky = document.querySelector(".summaryText")
var mainWind= document.querySelector(".wind")
var searched=[]

function Displaytext(){
  v= fetchpost()
}

        var getLocalWeather= function(x){ 
            // var cityaa = $(this).attr('value');
            var CityApi = `https://api.openweathermap.org/data/2.5/forecast?q=${x}&appid=9ae65e07b51d7c7d559b20d779c9b073&units=metric`;
          fetch(CityApi)
          .then(function (response) {
                if (response.ok) {
                  console.log(response);
                  response.json().then(function (data) {

                  var  wind = data.list[0].wind.speed
                  mainWind.innerHTML= `Wind:${wind}MPH`

                  
                    console.log(data);
                
                for (let i = 0; i <5; i++) {
                  var temp = document.querySelector(`.temp${i+1}`)
                  console.log(i*8)
                  temp.textContent= data.list[i*8].main.temp;
                  
                }
                  });
                }
            })
        };
        function renderButtons() {

          
          $("#Append").html("")
            
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
   getLocalWeather(x)
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
