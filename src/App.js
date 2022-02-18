import React, { useState, useEffect } from 'react';

import { CurrentWeather } from './components/organisms/CurrentWeather/CurrentWeather';
import { HourlyForecast } from './components/organisms/HourlyForecast/HourlyForecast';
import { DailyForecast } from './components/organisms/DailyForecast/DailyForecast';
import { getCity, getWeather } from './api/requests';

import { Grid, GStart, GTop, GMiddle, GBottom, GCurrent, GHourly, GDaily, GMainDetails, GSmallDetails } from './components/atoms/Grid/Grid';

export function App() {
    const [time, setTime] = useState(5);
    const [timeToRefresh, triggerTimeToRefresh] = useState(false);
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);
    // const [location, setLocation] = useState(null);

    useEffect(() => {
        const interval = window.setInterval(count, 60000);
        return () => window.clearInterval(interval)
    }, [time]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(loadWeather);
    }, [timeToRefresh]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(setLocation)
    // }, [setLocation]);


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

        getCity(location, setCity);
        getWeather(location, setWeather);
    }

    let content = <div></div>;

    if (city && weather) {
        content = 
            <Grid>
                <GTop>
                    <GMainDetails>Main details</GMainDetails>
                    <GSmallDetails>Small details</GSmallDetails>
                </GTop>
                <GMiddle>
                    <GCurrent>
                        <CurrentWeather city={city} weather={weather} time={time} />
                    </GCurrent>
                    <GHourly >
                        <HourlyForecast hourly={weather.hourly} />
                    </GHourly>
                </GMiddle>
                <GBottom>
                    <GDaily >
                        <DailyForecast daily={weather.daily} />
                    </GDaily>
                </GBottom>
                
            </Grid>
    }
    else {
        content = 
            <GStart>
                <div className="loader"></div>
            </GStart>
    }

    return (
        <React.StrictMode>
            {content}
        </React.StrictMode> 
    );
};


