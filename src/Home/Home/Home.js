import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import Offers from '../Offers/Offers';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header/>
            <Offers/>
            <Courses/>
            <Review/>
            <Partner/>
            <Footer/>
        </div>
    );
};

export default Home;