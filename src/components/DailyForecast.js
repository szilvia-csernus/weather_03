import React from 'react';
import DailyData from './DailyData';
import SignPicker from './SignPicker';

function DailyForecast({ daily }) {
    const dailyData = [];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 7; i++) {
        const dayNumber = new Date((daily[i].dt)*1000).getDay();
        dailyData.push({
            id: i,
            day: days[dayNumber],
            tempMin: daily[i].temp.min.toFixed(0),
            tempMax: daily[i].temp.max.toFixed(0),
            icon: SignPicker(daily[i].weather[0].icon),
            description: daily[i].weather[0].description
        })
    }

    return (
        <>
            <h3 className='subtitle'>7-day forecast</h3>
            <div className="weather-forecast weather-forecast--vertical">
                {dailyData.map(d => (
                    <DailyData 
                        key={d.id}
                        day={d.day}
                        icon={d.icon} 
                        tempMin={d.tempMin} 
                        tempMax={d.tempMax} 
                        description={d.description}
                    />
                ))}
            </div>
        </>
    );
}

export default DailyForecast;