import React, { useState, useEffect, useContext } from 'react';

import { WeatherDataContext } from '../../App'

import icon from '../../images/icons/humidity-icon.png'

const Humidity = () => {

    const data = useContext(WeatherDataContext)
    const [humidityData, setHumidityData] = useState([])

    useEffect(() => {
        setHumidityData([data[0].main.humidity])
    },[])

    return (
        <div>
            {
                humidityData.length
                ?
                <div>
                    <div>
                        <img className='w-6' src={icon} alt="humidity icon" />
                        <h1>HUMIDITY</h1>
                    </div>
                    <div>
                        <h1>{data[0].main.humidity}%</h1>
                    </div>
                </div>
                : <h1>loading</h1>
            }
        </div>
    );
};

export default Humidity;