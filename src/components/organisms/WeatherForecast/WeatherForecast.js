import React from 'react';
import HourlyForecast from '../../molecules/HourlyForecast/HourlyForecast';
import DailyForecast from '../../molecules/DailyForecast/DailyForecast';
import styles from './WeatherForecast.module.scss';


function WeatherForecast({ weather }) {


    let content = <div></div>;

    if (weather) {

        const hourly = weather.hourly;
        const daily = weather.daily;

        
        content =
        (<>
            <div className="general-frame">
                <h2 className='subtitle'>Hourly forecast</h2>
                <table >
                    <HourlyForecast hourly={hourly}/>
                </table>
            </div>
            <div className="general-frame">
                <h2 className='subtitle'>Daily forecast</h2>
                <table >
                    <DailyForecast daily={daily}/>
                </table>
            </div>
        </>)

    }


    return (
        <div>
            {content}
        </div>
    )

}

export default WeatherForecast;