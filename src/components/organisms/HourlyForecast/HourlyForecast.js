import React from 'react';
import SignPicker from '../../SignPicker';
import styles from './HourlyForecast.module.scss';

export function HourlyForecast({hourly}) {
    const hourlyData = [];
    
    for (let i = 1; i < 24; i ++) {
        hourlyData.push({
            id: i,
            hour: new Date((hourly[i].dt)*1000).getHours(),
            temp: hourly[i].temp.toFixed(0),
            icon: hourly[i].weather[0].icon,
            icon: SignPicker(hourly[i].weather[0].icon)
        })
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <td colSpan="24"><h2 className='subtitle'>Hourly forecast</h2></td>
                </tr>
            </thead>
            <tbody>
                <tr >
                    {hourlyData.map(d => (
                        <td key={d.id} >
                            <div className={styles.hourlyData}>
                                <p>{d.hour}h</p>
                                <p className={styles.icon}>{d.icon}</p>
                                <p>{d.temp}&#176;</p>
                            </div>
                        </td>
                    ))}
                </tr>
            
            </tbody>
        </table>
        </>
    );
}
