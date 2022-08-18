import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { ValuesContext } from '../App'

import background from '../images/background-2.jpg'

import AirQuality from './WeatherDetailsComponents/AirQuality';
import Wind from './WeatherDetailsComponents/Wind';
import Humidity from './WeatherDetailsComponents/Humidity';
import FeelLike from './WeatherDetailsComponents/FeelLike';
import Visibility from './WeatherDetailsComponents/Visibility';

const WeatherDetails = () => {

    const geoCodes = useContext(ValuesContext)

    return (
        <div
            style={
            {backgroundAttachment: "fixed",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "0", 
            backgroundImage: `url(${background})`,}}
            >
            <AirQuality geoCodes={geoCodes} />
            <Wind />
            <Visibility />  
            <div className='flex mx-4 justify-between align-center m-auto'>
                <Humidity />
                <FeelLike />
            </div>

            <button
            className='absolute w-28 h-10 font-bold bg-black text-white bottom-5 right-5 text-center rounded-3xl transition-all hover:rounded-lg'>
                <Link to="/">
                    Home Page
                </Link>
            </button>

        </div>
    );
};

export default WeatherDetails;