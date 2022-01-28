import React, { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import { weatherUrl } from '../apis/weatherUrl';
import { cityUrl } from '../apis/cityUrl';
import { apiCall } from '../apis/apiCall';


function App() {
    const [time, setTime] = useState(5);
    const [timeToRefresh, triggerTimeToRefresh] = useState(false);
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        const interval = window.setInterval(count, 60000);
        return () => window.clearInterval(interval)
    }, [time]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(loadWeather);
    }, [timeToRefresh]);

    const count = () => {
        if (time <= 1) {
            triggerTimeToRefresh(currentTimeToRefresh => !currentTimeToRefresh)
            setTime(5);
        }
        else {
            setTime(newTime => newTime - 1);
        }
    }

    const loadWeather = (location) => {
        const wUrl = weatherUrl(location);
        const cUrl = cityUrl(location);
        
        apiCall(wUrl, setWeather);
        apiCall(cUrl, setCity);
    }

    return (
        <React.StrictMode>
            <div className="general-frame general-frame--invisible">
                <CurrentWeather city={city} weather={weather} time={time} />
                
            </div>
            <div>
                <WeatherForecast weather={weather} />
            </div>
        </React.StrictMode> 
    );
};

export default App

