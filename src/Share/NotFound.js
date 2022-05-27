import React from 'react';
import Footer from './Footer';

const NotFound = () => {
    return (
        <div className='text-center my-28'>
            <p className=' text-2xl font-bold  text-accent'> Not found 404 Error</p>


            <img className='mx-auto my-4' src="https://i.ibb.co/L67tNxc/404.jpg" alt="404" border="0" />
            <p className='text-xl my-4'>
                Please select a valid path <br></br>
                Thank You!
            </p>
        </div>
    );
};

export default NotFound;