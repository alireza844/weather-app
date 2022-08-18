import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios'
import icon from '../../images/icons/air-quality-icon.png'

const AirQuality = (props) => {

    const {lat, lon, apiKey} = props.geoCodes
    const [data, setData] = useState([])
    let airQualityValue = "";

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(response => {
            setData([response.data.list[0].main.aqi])
        })
    },[])
    
    if(data[0] === 1) {
        airQualityValue = "Good"
    } else if (data[0] === 2) {
        airQualityValue = "Fair"
    } else if (data[0] === 3) {
        airQualityValue = "Moderate"
    } else if (data[0] === 4) {
        airQualityValue = "Poor"
    } else if (data[0] === 5) {
        airQualityValue = "Very Poor"
    }


    return (
        <div className='m-4 mt-0 pt-4'>
            {
                data.length
                ? <div className='flex flex-col bg-blue-200 p-4 rounded-xl'>
                    <div className='flex justify-start items-center mb-2 opacity-75'>
                        <img className='w-8' src={icon} alt="air quality icon" />
                        <h2 className='pl-2 text-2xl font-semibold'>AIR QUALITY</h2>
                    </div>
                    <h1 className='font-normal text-xl'>{airQualityValue}</h1>
                </div>
                : <h1 className='flex flex-col bg-blue-200 p-4 align-center rounded-xl'>Loading...</h1>
            }
        </div>
    );
};

export default AirQuality;