export default class Weather {
    async getCurrentWeather(lat, lon) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_API_KEY}`)
        let json = await response.json()
        return json;
    }

    async getFiveDayForecast(lat, lon) {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_API_KEY}`)
        let json = await response.json()
        return json;
    }
}
