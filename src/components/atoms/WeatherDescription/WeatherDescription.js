import React from 'react';
import styles from './WeatherDescription.module.scss';

function WeatherDescription({description, tempMin, tempMax, humidity}) {
    return (
        <div className={styles.weatherDescription}>
            <p className={styles.rows}>{description}</p>
            <p className={styles.rows}>H: {tempMax}&#176;  L: {tempMin}&#176;</p>
            <p className={styles.rows}>Humidity: {humidity} %</p>
        </div>
    )
}

export default WeatherDescription;