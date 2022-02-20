import React from 'react';
import styles from './Humidity.module.scss';

export function Humidity({ humidity, uniqueStyles }) {

    return (
        <span className={styles.humidity + " " + uniqueStyles}>
            {humidity}
        </span>

    )

}