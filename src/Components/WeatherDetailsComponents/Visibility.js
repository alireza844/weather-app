import React, { useState, useEffect, useContext } from 'react';

import { WeatherDataContext } from '../../App'

import icon from '../../images/icons/visiblity-icon.png'

const Visibility = () => {

    const [visibility, setVisibility] = useState([])

    const data = useContext(WeatherDataContext)

    useEffect(() => {
        setVisibility([data[0].visibility])
    },[])

    return (
        <div className='m-4'>
            {
                visibility.length
                ? <div className='flex flex-col bg-blue-200 p-4 rounded-xl'>
                    <div className='flex justify-start items-center mb-2 opacity-75'>
                        <img className='w-8' src={icon} alt="visibility icon" />
                        <h2 className='pl-2 text-2xl font-semibold'>VISIBILITY</h2>
                    </div>
                    <h1 className='font-normal text-xl'>{Math.floor(visibility[0]/1000)}Km</h1>
                </div>
                : <h1 className='flex flex-col bg-blue-200 p-4 align-center rounded-xl'>Loading...</h1>
            }
        </div>
    );
};

export default Visibility;