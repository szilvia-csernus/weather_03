import React, {useState, useEffect} from 'react';
import { getCity } from '../../../api/requests';
import { SmallButton } from '../../atoms/Button/Button';
import styles from './CityName.module.scss';

export function CityName({timeToRefresh}) {

    const [city, setCity] = useState(null);

    const loadCity = (location) => {
        getCity(location, setCity);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(loadCity);
    }, [timeToRefresh]);

    let content = <div></div>;

    if (city) {
        const cityName = city.address.town;
        content = 
        <>
            <h1 className={styles.city}>{cityName} </h1>
            <SmallButton text="Change City" />
        </>
    }
    return (
        <>
            {content}
        </>
        
    )

}