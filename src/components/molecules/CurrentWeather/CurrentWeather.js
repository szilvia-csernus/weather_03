import React from 'react';
import WeatherDescription from '../../atoms/WeatherDescription/WeatherDescription';
import RefreshIcon from '../../../assets/refresh.svg';
import SignPicker from '../../SignPicker';
import styles from './CurrentWeather.module.scss';


function CurrentWeather({ city, weather, time }) {
    
    let content = <div></div>;
    
    if (weather && city ) {

        const cityName = city.address.town;
        const temp = weather.current.temp.toFixed(0);
        const tempMin = weather.daily[0].temp.min.toFixed(1);
        const tempMax = weather.daily[0].temp.max.toFixed(1);
        const humidity = weather.current.humidity;
        const description = weather.current.weather[0].description;
        const icon = weather.current.weather[0].icon;
        const iconSign = SignPicker(icon);

        content = 
            <>
                <h1 className={styles.city}>{cityName}</h1>
                <div className={styles.temp}>{temp}&#176;</div>
                <p className={styles.mainIcon}>{iconSign}</p>
                <WeatherDescription 
                    description={description}
                    tempMax={tempMax}
                    tempMin={tempMin}
                    humidity={humidity}
                    />
                <div className={styles.refreshing}>
                    <img className={styles.sign} src={RefreshIcon} alt="refresh icon" />
                    in {time} minute(s)
                </div>
                
            </>;

    } else {
        content = <article className={styles.loading}>Loading weather...</article>;
    }

    
    return (
        <div>
            {content}
        </div>
    )
    
}

export default CurrentWeather;

