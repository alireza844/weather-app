import React from 'react';

import Weather from './Weather'

import background from '../images/background.avif';

const HomePage = () => {
    return (
        <div>
            <div style={
            {backgroundAttachment: "fixed",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "0", 
            backgroundImage: `url(${background})`}}
            > 
                <Weather />
            </div>
        </div>
    );
};

export default HomePage;