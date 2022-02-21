import React, { useState, useEffect } from 'react';

import { CurrentWeather } from './components/organisms/CurrentWeather/CurrentWeather';
import { HourlyForecast } from './components/organisms/HourlyForecast/HourlyForecast';
import { DailyForecast } from './components/organisms/DailyForecast/DailyForecast';
import { getWeather } from './api/requests';
import { RefreshTime } from './components/molecules/RefreshTime/RefreshTime';
import { CityName } from './components/molecules/CityName/CityName';
import { Warning } from './components/molecules/Warning/Warning';
import { Loader } from './components/molecules/Loader/Loader';

import { Grid, GridTop, GridMiddle, GridBottom} from './components/atoms/Layout/Grid';
import { FrameStart } from './components/atoms/Layout/Frames';

export function App() {
    
    const [timeToRefresh, setTimeToRefresh] = useState(false);
    const [weather, setWeather] = useState(null);
    // const [location, setLocation] = useState(null)
    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(loadWeather);
    }, [timeToRefresh]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(setLocation)
    // }, [setLocation]);

    const loadWeather = (location) => {
        getWeather(location, setWeather);
    }

    let content = <div></div>;

    if (weather) {
        content = 
            <Grid>
                <GridTop>
                    <div>
                        <RefreshTime 
                            timeToRefresh={timeToRefresh}
                            setTimeToRefresh={setTimeToRefresh}
                        />
                        <CityName timeToRefresh={timeToRefresh} />
                    </div>
                    <div>
                        <Warning alerts={weather.alerts} setWeather={setWeather}/>
                    </div>
                </GridTop>
                <GridMiddle>
                        <CurrentWeather weather={weather} />
                        <HourlyForecast hourly={weather.hourly} />
                </GridMiddle>
                <GridBottom>
                        <DailyForecast daily={weather.daily} />
                </GridBottom>               
            </Grid>
    }
    else {
        content = 
            <FrameStart>
                <Loader/>
            </FrameStart>
    }

    return (
        <React.StrictMode>
            {content}
        </React.StrictMode> 
    );
};


