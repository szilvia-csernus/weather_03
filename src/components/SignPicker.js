import React from 'react';
import Sunny from '../assets/sunny.svg';
import FewClouds from '../assets/fewclouds.svg';
import ScatteredClouds from '../assets/scatteredclouds.svg';
import ThickClouds from '../assets/thickclouds.svg';
import ShowerRain from '../assets/showerrain.svg';
import Rain from '../assets/rain.svg';
import Thunderstorm from '../assets/thunderstorm.svg';
import Snow from '../assets/snow.svg';
import Fog from '../assets/fog.svg';
import Moon from '../assets/moon.svg';
import FewCloudsNight from '../assets/fewcloudsnight.svg';

// function SignPicker(sign) {
//     const signs = {
//         "01d": <Sunny/>,
//         "02d": <FewClouds/>,
//         "03d": <ScatteredClouds/>,
//         "04d": <ThickClouds/>,
//         "09d": <ShowerRain/>,
//         "10d": <Rain/>,
//         "11d": <Thunderstorm/>,
//         "13d": <Snow/>,
//         "50d": <Fog/>,
//         "01n": <Moon/>,
//         "02n": <FewCloudsNight/>,
//         "03n": <ScatteredClouds />,
//         "04n": <ThickClouds />,
//         "09n": <ShowerRain />,
//         "10n": <Rain />,
//         "11n": <Thunderstorm />,
//         "13n": <Snow />,
//         "50n": <Fog />,
//     }
//     return signs[sign]
// }

function SignPicker(sign) {
    const signs = {
        "01d": <img src={Sunny} width="40"/>,
        "02d": <img src={FewClouds} width="40"/>,
        "03d": <img src={ScatteredClouds} width="40"/>,
        "04d": <img src={ThickClouds} width="40"/>,
        "09d": <img src={ShowerRain} width="40"/>,
        "10d": <img src={Rain} width="40"/>,
        "11d": <img src={Thunderstorm} width="40"/>,
        "13d": <img src={Snow} width="40"/>,
        "50d": <img src={Fog} width="40"/>,
        "01n": <img src={Moon} width="40"/>,
        "02n": <img src={FewCloudsNight} width="40"/>,
        "03n": <img src={ScatteredClouds} width="40"/>,
        "04n": <img src={ThickClouds} width="40"/>,
        "09n": <img src={ShowerRain} width="40"/>,
        "10n": <img src={Rain} width="40"/>,
        "11n": <img src={Thunderstorm} width="40"/>,
        "13n": <img src={Snow} width="40"/>,
        "50n": <img src={Fog} width="40"/>,
    }
    return signs[sign]
}

export default SignPicker;