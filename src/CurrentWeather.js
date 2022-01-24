import React, { useState, useEffect } from 'react';
import CityName from './CityName';
import Temp from './Temp';
import WeatherDescription from './WeatherDescription';
import Icon from './Icon';

const toQueryString = (obj) => {
    const parts = [];
    for (let i in obj) {
        parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
    return parts.join('&');
}

function CurrentWeather({ timeToRefresh }) {
    
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        // console.log("timetoRefresh useEffect triggered from Weather.")
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
        let url = 'http://api.openweathermap.org/data/2.5/weather?';
        let params = {
            lat: location.coords.latitude,
            lon: location.coords.longitude,
        };
        url += toQueryString(params);
        url += '&units=metric&';
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

        const cityName = weather.name;
        const temp = weather.main.temp.toFixed(0);
        const tempMin = weather.main.temp_min.toFixed(1);
        const tempMax = weather.main.temp_max.toFixed(1);
        const humidity = weather.main.humidity;
        const description = weather.weather[0].description;
        const icon = weather.weather[0].icon;

        content = 
        <div>
            <CityName cityName={cityName}/>
            <Temp temp={temp}/>
            <Icon icon={icon}/>
            <WeatherDescription 
                description={description}
                tempMax={tempMax}
                tempMin={tempMin}
                humidity={humidity}
            />
            
        </div>;

    } else {
        content = <div className='loading'>Loading weather...</div>;
    }

    
    return (
        <div className="weather">
            {content}
        </div>
    )
    
}

export default CurrentWeather;

