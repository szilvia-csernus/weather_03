import React from 'react';
import Weather from './Weather';



const App = () => {
    return (
        <div className="general-frame">
            <Weather />
            <div className="refreshing">
                <div className="sign"></div>
            </div>
        </div>
    )
}
    

export default App

