import React, { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import RefreshIcon from './assets/refresh.svg';
import WeatherForecast from './WeatherForecast';


function App() {
    const [time, setTime] = useState(5);
    const [timeToRefresh, triggerTimeToRefresh] = useState(false);

    useEffect(() => {
        const interval = window.setInterval(count, 60000);
        // console.log("time useEffect triggered.");
        return () => window.clearInterval(interval)
    }, [time]);


    const count = () => {
        if (time <= 1) {
            triggerTimeToRefresh(currentTimeToRefresh => !currentTimeToRefresh)
            setTime(5);
        }
        else {
            setTime(newTime => newTime - 1);
        }
    };

    return (
        <React.StrictMode>
            <div className="general-frame general-frame--invisible">
                <CurrentWeather timeToRefresh={timeToRefresh} />
                <div className="refreshing">
                    <div className="sign">
                        <RefreshIcon />
                    </div>
                    <div> in {time} minute(s)</div>
                </div>
            </div>
            <div>
                <WeatherForecast timeToRefresh={timeToRefresh} />
            </div>
        </React.StrictMode> 
    );
};

export default App

