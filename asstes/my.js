


// const nflApi = 'https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid=9ae65e07b51d7c7d559b20d779c9b073'
//     const response = await fetch(nflApi);
//     const data = await response.json();
//     const { items } = data;


//     for (var i = 0; i < items.length; i++) {
//         var team = items[i];
        

//         fetch(team.$ref)
//         .then(function (response) {
//             // console.log(team.$ref); //console logs the team links
//             // console.log(response);
//             return response.json();
//         }) .then(function(data) {
//             const { date } = data;
//             console.log(date); //returns the data from the team links
        
 var x = document.getElementById("")
        var v = document.getElementById("#city").val();
$('#btn1').on("click", function () {
     
    localStorage.setItem('City', $("#city").val());
   

console.log(city)
listSearchedCity()
})
function listSearchedCity() {
    
var repoEl = document.createElement('p');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';
    repoEl.textContent = v;

    x.appendChild(repoEl);


}
//when the user clciks the botton there choices will be set to an orderder list on this side of middle display.
