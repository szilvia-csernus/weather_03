import React from 'react';
import styles from './Grid.module.scss';


export function Grid({children}) {
    return <div className={styles.grid}>{children}</div>
}

export function GStart({children}) {
    return <div className={styles.gridStart}>{children}</div>
}

export function GTop({ children }) {
    return <div className={styles.topFrame}>{children}</div>
}

export function GMiddle({ children }) {
    return <div className={styles.middleFrame + " " + styles.scrollableFrame}>{children}</div>
}

export function GBottom({ children }) {
    return <div className={styles.bottomFrame + " " + styles.scrollableFrame}>{children}</div>
}

export function GMainDetails({children}) {
    return <div className={styles.mainDetails}>{children}</div>
}

export function GSmallDetails({ children }) {
    return <div className={styles.smallDetails}>{children}</div>
}

export function GCurrent({children}) {
    return <div className={styles.current}>{children}</div>
}

export function GHourly({ children }) {
    return <div className={styles.hourly}>{children}</div>
}

export function GDaily({ children }) {
    return <div className={styles.daily}>{children}</div>
}