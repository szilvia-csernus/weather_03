import React from 'react';
import CityName from './CityName';
import Temp from './Temp';
import WeatherDescription from './WeatherDescription';
import Icon from './Icon';
import RefreshIcon from '../assets/refresh.svg';


function CurrentWeather({ city, weather, time }) {
    
    let content = <div></div>;
    
    if (weather && city ) {

        const cityName = city.address.town;
        const temp = weather.current.temp.toFixed(0);
        const tempMin = weather.daily[0].temp.min.toFixed(1);
        const tempMax = weather.daily[0].temp.max.toFixed(1);
        const humidity = weather.current.humidity;
        const description = weather.current.weather[0].description;
        const icon = weather.current.weather[0].icon;

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
            <div className="refreshing">
                <span><img src={RefreshIcon} alt="refresh icon" width="20"/></span>
                in {time} minute(s)
            </div>
            
        </div>;

    } else {
        content = <article className='loading'>Loading weather...</article>;
    }

    
    return (
        <div className="weather">
            {content}
        </div>
    )
    
}

export default CurrentWeather;

