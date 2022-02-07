import React from 'react';
import HourlyData from '../../atoms/HourlyData/HourlyData';
import SignPicker from '../../SignPicker';
import styles from './HourlyForecast.module.scss';

function HourlyForecast({hourly}) {
    const hourlyData = [];
    
    for (let i=1; i<24; i++) {
        hourlyData.push({
            id: i,
            hour: new Date((hourly[i].dt)*1000).getHours(),
            temp: hourly[i].temp.toFixed(0),
            icon: hourly[i].weather[0].icon,
            icon: SignPicker(hourly[i].weather[0].icon)
        })
    }

    return (
        <tbody>
        <tr >
            {hourlyData.map(d => (
                <td key={d.id} ><HourlyData hour={d.hour} icon={d.icon} temp={d.temp} /></td>
            ))}
        </tr>
        
        </tbody>
    );
}

export default HourlyForecast;