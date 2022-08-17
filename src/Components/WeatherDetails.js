import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { ValuesContext } from '../App'

import AirQuality from './WeatherDetailsComponents/AirQuality';
import Wind from './WeatherDetailsComponents/Wind';
import Humidity from './WeatherDetailsComponents/Humidity';
import FeelLike from './WeatherDetailsComponents/FeelLike';
import Visibility from './WeatherDetailsComponents/Visibility';

const WeatherDetails = () => {

    const geoCodes = useContext(ValuesContext)

    return (
        <div>
            <AirQuality geoCodes={geoCodes} />
            <Wind />
            <Humidity />
            <FeelLike />
            <Visibility />

            <button
            // to="/"
            className='absolute w-28 h-10 font-bold bg-black text-white bottom-5 right-5 text-center rounded-3xl transition-all hover:rounded-lg'>
                <Link to="/">
                    Home Page
                </Link>
            </button>

        </div>
    );
};

export default WeatherDetails;