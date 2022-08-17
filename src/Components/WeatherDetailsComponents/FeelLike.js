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
        <div>
            {
                feelLike.length
                ?
                <div>
                    <div>
                        <img className='w-6' src={icon} alt='feel like icon' />
                        <h1>FEELS LIKE</h1>
                    </div>
                    <div>
                        <h1>{feelLike}°C</h1>
                    </div>
                </div>
                : <h1>Loading...</h1>
            }
        </div>
    );
};

export default FeelLike;