import React from 'react';

function HourlyData({hour, icon, temp}) {
    return (
        <div className="weather-forecast-data">
            <p>{hour}h</p>
            <p className='icon'>{icon}</p>
            <p>{temp}&#176;</p>
        </div>
    )
}

export default HourlyData;