import React, { useState, useEffect } from 'react';
import { RefreshButton } from '../../atoms/Button/Button';
import styles from './RefreshTime.module.css';

export function RefreshTime({ timeToRefresh, setTimeToRefresh }) {
    
    const [time, setTime] = useState(5);

    useEffect(() => {
        const interval = window.setInterval(count, 60000);
        return () => window.clearInterval(interval)
    }, [time]);

    const changeTimeToRefresh = (timeToRefresh) => {
        setTime(5);
        return !timeToRefresh
    }

    const count = () => {
        if (time <= 1) {
            setTimeToRefresh(changeTimeToRefresh)
            setTime(5);
        }
        else {
            setTime(newTime => newTime - 1);
        }
    }

    const click = (timeToRefresh, changeTimeToRefresh, setTimeToRefresh) => {
        return setTimeToRefresh(changeTimeToRefresh(timeToRefresh))
    }

    return (
        <div className={styles.refreshing}>
            <RefreshButton  onClick={() => click(timeToRefresh, changeTimeToRefresh, setTimeToRefresh)} />
            <div>
                  in {time} minute(s)
            </div>
        </div>
    )

}