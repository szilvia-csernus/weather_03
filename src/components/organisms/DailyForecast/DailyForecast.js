import React from 'react';
import SignPicker from '../../SignPicker';
import { Frame } from '../../atoms/Layout/Frames';
import { Table } from '../../atoms/Table/Table';
import { Degree } from '../../molecules/Degree/Degree';
import { Humidity } from '../../molecules/Humidity/Humidity';
import styles from './DailyForecast.module.scss';

export function DailyForecast({ daily }) {
    const headRow = [];
    const rowOfIcons = [];
    const rowOfTempMin = [];
    const rowOfTempMax = [];
    const rowOfHumidity =[];
    
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 7; i++) {
        
        const dayNumber = new Date((daily[i].dt)*1000).getDay();
        headRow.push(
            days[dayNumber]
        )
        rowOfIcons.push(
            SignPicker(daily[i].weather[0].icon),
        )
        rowOfTempMin.push(
            <Degree degree={daily[i].temp.min.toFixed(0)}/>
        )
        rowOfTempMax.push(
            <Degree degree={daily[i].temp.max.toFixed(0)}/>
        )
        let humidity = daily[i].humidity.toFixed(0);
        rowOfHumidity.push(<Humidity humidity={humidity}/>);
        
    }

    const rowsOfData = [rowOfIcons, rowOfTempMin, rowOfTempMax, rowOfHumidity]

    return (
        <Frame uniqueStyles={styles.frameDaily}>
            <Table headRow={headRow} rowsOfData={rowsOfData} uniqueStyles={styles.table}/>
        </Frame>
    );
}
