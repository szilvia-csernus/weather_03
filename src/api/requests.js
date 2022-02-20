import { getRequest } from "./utils/getRequest";

export const getWeather = (location, success ) => {
    
    const url = 'http://api.openweathermap.org/data/2.5/onecall?'
    const params = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        units: "metric",
        exclude: "minutely",
        APPID: process.env.WEATHER_API_KEY,
        lang: "en"
    };

    getRequest(url, params, success)
}



export const getCity = (location, success) => {

    const url = `https://us1.locationiq.com/v1/reverse.php?`
    const params = {
        key: process.env.CITY_API_KEY,
        lat: location.coords.latitude,
        lon: location.coords.longitude,
        format: "json"
    }


    getRequest(url, params, success)

}
