import React from 'react';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';


function WeatherForecast({ weather }) {


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