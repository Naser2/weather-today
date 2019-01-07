// // init Weather class / object 

// const weather = new weather('New York', 'NY');

// weather.getWeather()
// .then()
// .catch() 
// // console.log()


// Init weather object
const weather = new Weather('London', 'uk', 'fr');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}