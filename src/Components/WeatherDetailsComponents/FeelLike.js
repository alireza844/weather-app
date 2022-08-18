import React, { useContext, useState, useEffect } from 'react';

import { WeatherDataContext } from '../../App'

import icon from '../../images/icons/tempurature-icon.png'

const FeelLike = () => {

    const data = useContext(WeatherDataContext)
    const [feelLike, setFeelLike] = useState([])

    useEffect(() => {
        setFeelLike([data[0].main.humidity])
    },[])

    return (
        <div className='m-1'>
            {
                feelLike.length
                ?
                <div className='flex flex-col p-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>
                    <div className='flex justify-start items-center mb-2 opacity-75'>
                        <img className='w-8' src={icon} alt='feel like icon' />
                        <h2 className='pl-2 text-xl font-semibold'>FEELS LIKE</h2>
                    </div>
                    <h1 className='font-extralight text-6xl text-center'>{feelLike}°C</h1>
                </div>
                : <h1 className='flex flex-col bg-blue-200 p-4 align-center rounded-xl'>Loading...</h1>
            }
        </div>
    );
};

export default FeelLike;