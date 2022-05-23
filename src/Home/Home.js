import React from 'react';
import Footer from '../Share/Footer';
import Loading from '../Share/Loading';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Home;