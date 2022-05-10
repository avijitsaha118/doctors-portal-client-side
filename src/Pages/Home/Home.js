import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;