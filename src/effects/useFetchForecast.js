import { useFetch } from './useFetch';

export function useFetchDailyForecast(location) {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${location[0]}&lon=${location[1]}&APPID=${process.env.WEATHER_API_KEY}`;
    return useFetch(url, {});
}

export function useFetchFiveDayForecast(location) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${location[0]}&lon=${location[1]}&APPID=${process.env.WEATHER_API_KEY}`;
    return useFetch(url, {});
}