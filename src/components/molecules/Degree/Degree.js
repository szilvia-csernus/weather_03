import React from 'react';
import styles from './Degree.module.scss';

export function Degree({ degree, uniqueStyles }) {

    return (
        <span className={styles.degree + " " + uniqueStyles}>
            {degree}
        </span>

    )

}