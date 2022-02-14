import React, { useState, useEffect } from 'react';
import { Grid, GridItemCurrent, GridItemHourly, GridItemDaily } from './atoms/Grid/Grid';
import { CurrentWeather } from './organisms/CurrentWeather/CurrentWeather';
import { HourlyForecast } from './organisms/HourlyForecast/HourlyForecast';
import { DailyForecast } from './organisms/DailyForecast/DailyForecast';
import { weatherUrl } from '../apis/weatherUrl';
import { cityUrl } from '../apis/cityUrl';
import { apiCall } from '../apis/apiCall';

export function App() {
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

    let content = <div></div>;

    if (city && weather) {
        content = 
            <Grid>
                <GridItemCurrent>
                    <CurrentWeather city={city} weather={weather} time={time} />
                </GridItemCurrent>
                <GridItemHourly >
                    <HourlyForecast hourly={weather.hourly} />
                </GridItemHourly>
                <GridItemDaily >
                    <DailyForecast daily={weather.daily} />
                </GridItemDaily>
            </Grid>
    }
    else {
        content = 
            <section className="invisible-frame">
                <div className="loader"></div>
            </section>
    }

    return (
        <React.StrictMode>
            {content}
        </React.StrictMode> 
    );
};


