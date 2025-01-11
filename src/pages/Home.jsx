import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Extra from '../components/Extra';
import Extra2 from '../components/Extra2';
import Recentproduct from '../ejpupdate/Recentproduct';
import Promotional from '../ejpupdate/Promotional';
import Offer from '../ejpupdate/Offer';
import Newslatter from '../ejpupdate/Newslatter';
import Blog from '../ejpupdate/Blog';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Category></Category>
            <Extra></Extra>
            <Extra2></Extra2>
            <Recentproduct></Recentproduct>
            <Promotional></Promotional>
            <Offer></Offer>
            <Newslatter></Newslatter>
            
        </div>
    );
};

export default Home;