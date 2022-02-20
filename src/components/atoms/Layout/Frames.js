import React from 'react';
import styles from './Frames.module.scss';

export function Frame({ children, uniqueStyles}) {
    return <div className={styles.frame + " " + uniqueStyles}>{children}</div>
}

export function FrameStart({ children }) {
    return <div className={styles.frameStart}>{children}</div>
}
