import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { WeatherDataContext } from '../App';

const Weather = () => {

    const data = useContext(WeatherDataContext)
    const { name, main: {temp, temp_max, temp_min} } = data[0]

    return (
        <div>
            <div className='text-white text-center h-screen pt-20'>
                <h1 className='text-7xl font-bold p-1'>{name}</h1>
                <h1 className='text-8xl font-extralight'>{Math.round(temp)}°</h1>
                <h1 className='text-3xl opacity-70 p-1'>{data[0].weather[0].description}</h1>
                <div className='flex w-1/3 justify-between m-auto text-xl'>
                    <h1>H:{Math.round(temp_max)}°</h1>
                    <h1>L:{Math.round(temp_min)}°</h1>
                    {/* برای مقادیر بالا مقدار روزانه رو قرار بده نه مقدار ساعتی */}
                </div>
                <button 
                    className='mt-10 bg-gray-100 p-3 rounded-lg text-black font-bold text-xl shadow transition-all ease-in-out hover:rounded-2xl hover:text-2xl hover:shadow-2xl'>
                    <Link to="/details">More Details</Link>
                </button>
            </div>
        </div>
    );
};

export default Weather;