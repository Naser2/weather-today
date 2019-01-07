
class Weather {

  constructor(city, state, language, ) {
    this.apiKey = process.env.Api_Key;
    this.city = city;
    this.state = state;
    this.language = language;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&lang=${this.language}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData
  }

  // Change weather location
  changeLocation(city, state, language) {
    this.city = city;
    this.state = state;
    this.language = language;
  }
}