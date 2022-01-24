import React from 'react';

function HourlyData({hour, icon, temp}) {
    return (
        <ul className="weather-forecast-data">
            <p>{hour}h</p>
            <p className='icon'>{icon}</p>
            <p>{temp}&#176;</p>
        </ul>
    )
}

export default HourlyData;