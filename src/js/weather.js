async function getCurrentWeather(lat, lon) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&APPID=fd8cbbbd63ffd597d837a0afe79aecc7`)
    let json = await response.json()
    return json;
}