import React from 'react';

function DailyData({ day, icon, tempMin, tempMax, description}) {
    return (
        <div className="weather-forecast-data--horizontal weather-forecast-data">
            <p>{day}</p>
            <p className='icon'>{icon}</p>
            <p>{description}</p>
            <p>Low: {tempMin}&#176;</p>
            <p>High: {tempMax}&#176;</p>
        </div>
    )
}

export default DailyData;