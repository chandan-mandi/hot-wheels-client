import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopCarsCollection from '../TopCarsCollection/TopCarsCollection';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <TopCarsCollection></TopCarsCollection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;