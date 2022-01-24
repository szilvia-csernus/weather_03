import React, { useState, useEffect } from 'react';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
    return parts.join('&');
}

function WeatherForecast({ timeToRefresh }) {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // console.log("timetoRefresh useEffect triggered from WeatherForecast.")
        navigator.geolocation.getCurrentPosition(loadWeather)
    }, [timeToRefresh]);

    // const loadWeather = () => {
    //     setWeather( {
    //         name: "Ascot",
    //         main: {
    //             temp: counter,
    //             temp_min: 19,
    //             temp_max: 23,
    //             humidity: 40
    //         },
    //         weather: [
    //             {main: "sunny"}
    //         ]
    //     })
    // }

    const loadWeather = (location) => {
        let url = 'http://api.openweathermap.org/data/2.5/onecall?'
        let params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        };
        url += toQueryString(params);
        url += '&units=metric&exclude=minutely,alerts';
        const apiKey = '64ff2a289c3c36cdf5512f06c53b5ed7';
        url += `&APPID=${apiKey}&lang=en`;

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            //ready state of DONE means this is complete
            if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
                const data = JSON.parse(xmlhttp.responseText);
                setWeather(data);
            }
        };

        xmlhttp.open('GET', url, true);
        xmlhttp.send();
    }


    let content = <div></div>;

    if (weather) {

        const hourly = weather.hourly;
        const daily = weather.daily;

        
        content =
        (<>
            <div className="general-frame">
                <HourlyForecast hourly={hourly}/>
            </div>
            <div className="general-frame">
                <DailyForecast daily={daily}/>
            </div>
        </>)

    }


    return (
        <div className="weather">
            {content}
        </div>
    )

}

export default WeatherForecast;