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
            <table width="1060"className="general-frame">
                <HourlyForecast hourly={hourly}/>
            </table>
            <table width="1060" className="general-frame">
                <DailyForecast daily={daily}/>
            </table>
        </>)

    }


    return (
        <div className="weather">
            {content}
        </div>
    )

}

export default WeatherForecast;