import React from 'react';

import Weather from './HomePageComponents/Weather'

const HomePage = () => {
    return (
        <div>
            <div style={
                {backgroundAttachment: "fixed",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: "0", 
                backgroundImage: `url("https://images.unsplash.com/photo-1533683083439-1a776a5653cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")`}}> 
                <Weather />
            </div>
        </div>
    );
};

export default HomePage;