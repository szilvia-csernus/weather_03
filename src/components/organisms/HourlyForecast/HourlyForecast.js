import React from 'react';
import SignPicker from '../../SignPicker';
import { Frame } from '../../atoms/Layout/Frames';
import { Table } from '../../atoms/Table/Table';
import { Degree } from '../../molecules/Degree/Degree';
import { Humidity } from '../../molecules/Humidity/Humidity';
import styles from './HourlyForecast.module.scss';

export function HourlyForecast({hourly}) {
    const headRow = [];
    const rowOfTemps = [];
    const rowOfIcons = [];
    const rowOfHumidity = [];
    
    for (let i = 1; i < 24; i ++) {
        let hour = new Date((hourly[i].dt) * 1000).getHours();
        hour += ":00";
        headRow.push( hour );

        const icon = SignPicker(hourly[i].weather[0].icon);
        rowOfIcons.push(icon);

        let temp = hourly[i].temp.toFixed(0);
        rowOfTemps.push( <Degree degree={temp}/>);

        let humidity = hourly[i].humidity;
        rowOfHumidity.push(<Humidity humidity={humidity}/>)
    }

    const rowsOfData = [rowOfIcons,rowOfTemps, rowOfHumidity];

    return (
        <Frame uniqueStyles={styles.frameHourly}>
            <Table headRow={headRow} rowsOfData={rowsOfData} uniqueStyles={styles.table}/>
        </Frame>
    );
}
