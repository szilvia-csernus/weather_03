import React from "react";
import styles from './Button.module.css';

export function SmallButton({text}) {
    return <button className={styles.small}>{text} </button>
}

export function NormalButton({text}) {
    return <button className={styles.normal}>{text}</button>
}
