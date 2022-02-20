import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button/Button';

import styles from './Warning.module.scss';

export function Warning({ alerts, setWeather }) {

    const [warnings, setWarnings] = useState(null);

    useEffect(() => {
        setWarnings(alerts);
    }, [setWeather]);

    const click = (alertText) => {
        return alert(alertText)
    }

    let content = <div></div>

    if (warnings) {
        const list = [];

        warnings.map((warning, key) => {
            list.push(<li key={key}><Button uniqueStyles={styles.warning} onClick={() => click(warning.description)} content={warning.event} /></li>)
        })

        content = (
            <ul>
                {list}
            </ul>
        )
        
    }

    return (
        <>
            {content}
        </>
    )

}