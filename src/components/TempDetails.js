import React from 'react';

function TempDetails({tempMin, tempMax}) {
    return <p>H: {tempMax}&#176;  L: {tempMin}&#176;</p>
}

export default TempDetails;