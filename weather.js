
class weather extends Component {
  constructor(){
   this.apiKey = process.env.Weather_Key;
   this.city = city;
   this.state = state;
  }

//fetch from api
  async getWeather() {
     const response = await fetch (`api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.apikeKey}`)
     const responseData = await response.json();
     return responseData.currentObservation;
  }

}
