
const weather = new Weather('New York','usa', 'fr')

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getTheWeather);

weather.changeLocation('Florida', 'us', 'eng');

function getTheWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}