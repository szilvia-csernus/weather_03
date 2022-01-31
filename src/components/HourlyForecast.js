import React from 'react';
import HourlyData from './HourlyData';
import SignPicker from './SignPicker';

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
        <tr>
            <th colSpan="24" className='subtitle'>Hourly forecast</th>
        </tr>
        <tr className="weather-forecast">
            {hourlyData.map(d => (
                <td key={d.id} width="20" ><HourlyData hour={d.hour} icon={d.icon} temp={d.temp} /></td>
            ))}
        </tr>
        
        </tbody>
    );
}

export default HourlyForecast;