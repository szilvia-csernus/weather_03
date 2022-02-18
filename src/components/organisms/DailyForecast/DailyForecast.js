import React from 'react';
import SignPicker from '../../SignPicker';
import { Table } from '../../atoms/Table/Table';
import styles from './DailyForecast.module.scss';

export function DailyForecast({ daily }) {
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
        <Table tableWidth={5} tableTitle={'Daily forecast'} tableBody={
                dailyData.map(d => (
                    <tr key={d.id}>
                        <td>{d.day}</td>
                        <td className={styles.icon}>{d.icon}</td>
                        <td>{d.description}</td>
                        <td>Low: {d.tempMin}&#176;</td>
                        <td>High: {d.tempMax}&#176;</td>
                    </tr>
                ))
            }>
            
        </Table>
    );
}
