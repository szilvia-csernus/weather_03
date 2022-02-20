import React from "react";
import RefreshIcon from '../../../assets/refresh.svg';
import styles from './Button.module.css';


export function RefreshButton({onClick}) {
    return <button className={styles.refreshSign} onClick={onClick}>
        <img  src={RefreshIcon} alt="refresh icon" />
    </button>
}

export function Button({content, onClick, uniqueStyles}) {
    return <button className={styles.button + " " + uniqueStyles} onClick={onClick}>{content}</button>
}

export function SmallButton({text}) {
    return <button className={styles.small}>{text} </button>
}

export function NormalButton({text}) {
    return <button className={styles.normal}>{text}</button>
}
