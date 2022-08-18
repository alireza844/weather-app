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
        <div className='m-1'>
            {
                humidityData.length
                ?
                <div className='flex flex-col bg-blue-200 p-2 rounded-xl'>
                    <div className='flex justify-start items-center mb-2 opacity-75'>
                        <img className='w-8' src={icon} alt="humidity icon" />
                        <h2 className='pl-2 text-xl font-semibold'>HUMIDITY</h2>
                    </div>
                    <h1 className='font-extralight text-6xl text-center'>{data[0].main.humidity}%</h1>
                </div>
                : <h1 className='flex flex-col bg-blue-200 p-4 align-center rounded-xl'>loading...</h1>
            }
        </div>
    );
};

export default Humidity;