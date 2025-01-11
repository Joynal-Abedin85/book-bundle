import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
// import './index.css'


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='top-[62px] relative'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Mainlayout;