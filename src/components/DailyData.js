import React from 'react';

function DailyData({ day, icon, tempMin, tempMax, description}) {
    return (
        <>
            <td>{day}</td>
            <td className='icon'>{icon}</td>
            <td>{description}</td>
            <td>Low: {tempMin}&#176;</td>
            <td>High: {tempMax}&#176;</td>
        </>
    )
}

export default DailyData;