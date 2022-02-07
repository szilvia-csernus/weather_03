import React from 'react';
import DailyData from '../../atoms/DailyData/DailyData';
import SignPicker from '../../SignPicker';
import styles from './DailyForecast.module.scss';

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
        <tbody>
            {dailyData.map(d => (
                <tr key={d.id}>
                    <DailyData 
                        day={d.day}
                        icon={d.icon} 
                        tempMin={d.tempMin} 
                        tempMax={d.tempMax} 
                        description={d.description}
                    />
                </tr>
            ))}
        </tbody>
    );
}

export default DailyForecast;