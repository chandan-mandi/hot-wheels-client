import React from 'react';
import Footer from '../../shared/Footer/Footer';
import MenuBar from '../../shared/Navigation/MenuBar';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TopCarsCollection from '../TopCarsCollection/TopCarsCollection';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <TopCarsCollection></TopCarsCollection>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;