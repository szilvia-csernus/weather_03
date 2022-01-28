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

function SignPicker(sign) {
    const signs = {
        "01d": <Sunny/>,
        "02d": <FewClouds/>,
        "03d": <ScatteredClouds/>,
        "04d": <ThickClouds/>,
        "09d": <ShowerRain/>,
        "10d": <Rain/>,
        "11d": <Thunderstorm/>,
        "13d": <Snow/>,
        "50d": <Fog/>,
        "01n": <Moon/>,
        "02n": <FewCloudsNight/>,
        "03n": <ScatteredClouds />,
        "04n": <ThickClouds />,
        "09n": <ShowerRain />,
        "10n": <Rain />,
        "11n": <Thunderstorm />,
        "13n": <Snow />,
        "50n": <Fog />,
    }
    return signs[sign]
}

export default SignPicker;