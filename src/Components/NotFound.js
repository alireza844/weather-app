import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center h-1/3'>
                <h1 className='text-8xl'>404</h1>
                <h1 className='text-center text-3xl'>Page Not Found</h1>
            </div>
            <div  className='h-2/3 flex flex-col justify-center items-center '>
                <button className='border-2 outline outline-offset-2 outline-2 shadow-2xl p-3 rounded-lg border-black underline decoration-red-600 decoration-2 font-bold text-3xl'>
                    <Link to="/">Go to Home Page</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;