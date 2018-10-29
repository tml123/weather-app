import Weather from "./weather";

export default class Place {

    weather = new Weather();
    
    constructor(latitude=null, longitude=null) { 
        if (!latitude && !longitude) {
            this.getMyLocation()
                .then((response) => {
                    const { latitude, longitude } = response.coords;
                    this.latitude = latitude;
                    this.longitude = longitude; 
                },
                (error) => console.log(error));
        }
    }

    getMyLocation = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    getCurrentWeather = () => {
        return this.weather.getCurrentWeather(this.latitude, this.longitude);
    }

    getFiveDay = () => {
        return this.weather.getFiveDayForecast(this.latitude, this.longitude);
    }
}