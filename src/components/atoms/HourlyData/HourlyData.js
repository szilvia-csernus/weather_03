import React from 'react';
import styles from './HourlyData.module.css';

function HourlyData({hour, icon, temp}) {
    return (
        <div className={styles.hourlyData}>
            <p>{hour}h</p>
            <p className={styles.icon}>{icon}</p>
            <p>{temp}&#176;</p>
        </div>
    )
}

export default HourlyData;