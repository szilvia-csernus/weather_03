import React from 'react';
import styles from './Grid.module.scss';


export function Grid({children}) {
    return <div className={styles.grid}>{children}</div>
}

export function GridItemCurrent({children}) {
    return <div className={styles.invisibleFrame + " " + styles.current}>{children}</div>
}

export function GridItemHourly({ children }) {
    return <div className={styles.generalFrame + " " + styles.hourly}>{children}</div>
}

export function GridItemDaily({ children }) {
    return <div className={styles.generalFrame + " " + styles.daily}>{children}</div>
}