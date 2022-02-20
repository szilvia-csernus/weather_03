import React from 'react';
import SignPicker from '../../SignPicker';
import { Frame } from '../../atoms/Layout/Frames';
import { Degree } from '../../molecules/Degree/Degree';
import { Humidity } from '../../molecules/Humidity/Humidity';

import styles from './CurrentWeather.module.scss';


export function CurrentWeather({ weather }) {
    
    const temp = weather.current.temp.toFixed(0);
    const tempMin = weather.daily[0].temp.min.toFixed(0);
    const tempMax = weather.daily[0].temp.max.toFixed(0);
    const humidity = weather.current.humidity;
    const description = weather.current.weather[0].description;
    const icon = weather.current.weather[0].icon;
    const iconSign = SignPicker(icon);

    return (
        <Frame uniqueStyles={styles.frameCurrent}>
            <div className={styles.iconPlusTempContainer}>
                <div className={styles.mainIcon}>{iconSign}</div>
                <div className={styles.tempRow}><Degree degree={temp} uniqueStyles={styles.temp}/></div>
            </div>
                
            <div className={styles.weatherDescription}>
                <div className={styles.description}>{description}</div>
                <div className={styles.rows}>High: <Degree degree={tempMax}/>   Low: <Degree degree={tempMin}/></div>
                <div className={styles.rows}><Humidity humidity={humidity} uniqueStyles={styles.humidity}/></div>
            </div>
        </Frame>
    )
    
}


