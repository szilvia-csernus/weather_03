import React from 'react';
import RefreshIcon from '../../../assets/refresh.svg';
import SignPicker from '../../SignPicker';
import styles from './CurrentWeather.module.scss';
import { SmallButton, NormalButton } from '../../atoms/Button/Button';


export function CurrentWeather({ city, weather, time }) {
    
    const cityName = city.address.town;
    const temp = weather.current.temp.toFixed(0);
    const tempMin = weather.daily[0].temp.min.toFixed(1);
    const tempMax = weather.daily[0].temp.max.toFixed(1);
    const humidity = weather.current.humidity;
    const description = weather.current.weather[0].description;
    const icon = weather.current.weather[0].icon;
    const iconSign = SignPicker(icon);

    return (
        <>
            <h1 className={styles.city}>{cityName} </h1>
            <SmallButton text="Change City" />
            <div className={styles.temp}>{temp}&#176;</div>
            <div className={styles.mainIcon}>{iconSign}</div>
            <div className={styles.weatherDescription}>
                <div className={styles.rows}>{description}</div>
                <div className={styles.rows}>H: {tempMax}&#176;  L: {tempMin}&#176;</div>
                <div className={styles.rows}>Humidity: {humidity} %</div>
            </div>

            <div className={styles.refreshing}>
                <img className={styles.sign} src={RefreshIcon} alt="refresh icon" />
                in {time} minute(s) 
            </div>
            <SmallButton text="Refresh Now"/>
        </>
    )
    
}


