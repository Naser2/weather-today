
const blackbox  = new Blackbox()
// console.log(blackbox.secret())

class Weather {
  constructor(city, state, language) {
    this.city = city;
    this.state = state;
    this.language = language;
    this.key = blackbox.secret()
  }


  // Fetch weather from API
  async getWeather() {
    console.log(this.key)

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&lang=${this.language}&APPID=${this.key}`);

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