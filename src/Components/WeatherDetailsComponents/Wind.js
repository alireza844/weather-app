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
        <div>
            {
                windDetails.length
                ? <div>
                    <div>
                        <img className='w-6' src={icon} alt="wind icon" />
                        <h1>WIND</h1>
                    </div>
                    <div>
                        <h1>Wind Speed: {windDetails[0].speed}KM/h</h1>
                        <h1>Wind Degree: {windDetails[0].deg}°</h1>
                    </div>
                </div>
                : <h1>Loading</h1>
            }
        </div>
    );
};

export default Wind;