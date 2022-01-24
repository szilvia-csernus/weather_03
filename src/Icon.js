import React from 'react';
import SignPicker from './SignPicker';

function Icon({ icon }) {
    const iconSign = SignPicker(icon);
    return <p className='main-icon'>{iconSign}</p>
}

export default Icon;