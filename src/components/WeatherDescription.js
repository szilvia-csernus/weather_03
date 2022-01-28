import React from 'react';
import Description from './Description';
import TempDetails from './TempDetails';
import Humidity from './Humidity';

function WeatherDescription({description, tempMin, tempMax, humidity}) {
    return (
        <div className="weather-description">
            <Description description={description}/>
            <TempDetails tempMin={tempMin} tempMax={tempMax} />
            <Humidity humidity={humidity} />
        </div>
    )
}

export default WeatherDescription;