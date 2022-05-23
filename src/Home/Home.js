import React from 'react';
import Footer from '../Share/Footer';
import Loading from '../Share/Loading';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ContractUs from './ContractUs';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ContractUs></ContractUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;