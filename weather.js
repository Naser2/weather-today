
const blackbox  = new Blackbox()

class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    // this.language = language;
    this.apiKey = blackbox.secret()
  }


  // Fetch weather from API
  async getWeather() {

    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&lang=${this.language}&APPID=${this.key}`);
    

    const responseData = await response.json();

    return responseData
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
    // this.language = language;
  }
}