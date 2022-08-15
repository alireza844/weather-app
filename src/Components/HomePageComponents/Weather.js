import React, { useContext } from 'react';

import { WeatherDataContext } from '../../App';

const Weather = () => {

    const data = useContext(WeatherDataContext)
    const { clouds: {all}, name, main: {temp, temp_max, temp_min} } = data[0]

    return (
        <div className='h-fit bg-white'>
            <div>
                <h1>{name}</h1>
                <h1>{temp}</h1>
                <h1>{all}</h1>
                <div>
                    <h1>H:{temp_max}</h1>
                    <h1>L:{temp_min}</h1>
                </div>
            </div>
        </div>
    );
};

export default Weather;