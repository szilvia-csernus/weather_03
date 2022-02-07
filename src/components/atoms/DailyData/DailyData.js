import React from 'react';
import styles from './DailyData.module.css'


function DailyData({ day, icon, tempMin, tempMax, description}) {
    return (
        <>
            <td>{day}</td>
            <td className={styles.icon}>{icon}</td>
            <td>{description}</td>
            <td>Low: {tempMin}&#176;</td>
            <td>High: {tempMax}&#176;</td>
        </>
    )
}

export default DailyData;