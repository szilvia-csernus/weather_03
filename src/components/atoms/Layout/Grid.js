import React from 'react';
import styles from './Grid.module.scss';


export function Grid({children}) {
    return <div className={styles.grid}>{children}</div>
}

export function GridTop({ children }) {
    return <div className={styles.gridTop}>{children}</div>
}

export function GridMiddle({ children }) {
    return <div className={styles.gridMiddle + " " + styles.scrollableFrame}>{children}</div>
}

export function GridBottom({ children }) {
    return <div className={styles.gridBottom + " " + styles.scrollableFrame}>{children}</div>
}