import React, { useContext } from 'react';
import AirQuality from './WeatherDetailsComponents/AirQuality';

import { ValuesContext } from '../App'

const WeatherDetails = () => {

    const geoCodes = useContext(ValuesContext)

    return (
        <div>
            <AirQuality geoCodes={geoCodes}/>
        </div>
    );
};

export default WeatherDetails;