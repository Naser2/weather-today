

class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.current_observation.display_location.full;
    this.desc.textContent = weather.current_observation.weather;
    this.string.textContent = weather.current_observation.emperature_string;
    this.icon.setAttribute('src', weather.current_observation.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.current_observation.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current_observation.feelslike_string}`;
    this.dewpoint.textContent = `DewPoint: ${weather.current_observation.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.current_observation.wind_string}`;
  }
}