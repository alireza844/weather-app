import React, { useEffect, useState } from 'react';

import axios from 'axios'
import icon from '../../images/icons/air-quality-icon.png'

const AirQuality = (props) => {

    const {lat, lon, apiKey} = props.geoCodes
    const [data, setData] = useState([])
    let airQualityValue = "";

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
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
        <div className='bg-white'>
            {
                data.length
                ? <div>
                    <div>
                        <img className='w-6' src={icon} alt="air quality icon" />
                        <h2>AIR QUALITY</h2>
                    </div>
                    <h1>{airQualityValue}</h1>
                </div>
                : <h1>Loading...</h1>
            }
        </div>
    );
};

export default AirQuality;