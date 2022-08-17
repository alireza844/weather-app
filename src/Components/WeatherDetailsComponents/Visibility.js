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
        <div>
            {
                visibility.length
                ? <div>
                    <div>
                        <img className='w-6' src={icon} alt="visibility icon" />
                        <h1>VISIBILITY</h1>
                    </div>
                    <div>
                        <h1>{Math.floor(visibility[0]/1000)}Km</h1>
                    </div>
                </div>
                : <h1>Loading</h1>
            }
        </div>
    );
};

export default Visibility;