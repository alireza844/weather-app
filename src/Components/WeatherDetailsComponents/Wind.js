import React, { useContext, useEffect, useState } from 'react';

import { WeatherDataContext } from '../../App'

import icon from '../../images/icons/wind-icon.png'

const Wind = () => {

    const [windDetails, setWindDetails] = useState([])

    const data = useContext(WeatherDataContext)

    useEffect(() => {
        setWindDetails([data[0].wind])
    },[])

    return (
        <div className='m-4'>
            {
                windDetails.length
                ? <div className='flex flex-col bg-blue-200 p-4 rounded-xl'>
                    <div className='flex justify-start items-center mb-2 opacity-75'>
                        <img className='w-8' src={icon} alt="wind icon" />
                        <h2 className='pl-2 text-2xl font-semibold'>WIND</h2>
                    </div>
                    <div>
                        <h1 className='font-normal text-xl'>Wind Speed: {windDetails[0].speed}KM/h</h1>
                        <h1 className='font-normal text-xl'>Wind Degree: {windDetails[0].deg}°</h1>
                    </div>
                </div>
                : <h1 className='flex flex-col bg-blue-200 p-4 align-center rounded-xl'>Loading...</h1>
            }
        </div>
    );
};

export default Wind;