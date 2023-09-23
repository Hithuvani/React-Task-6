import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../assests/bannerbackground.jpg';
import BannerImage from "..//assests/home-banner-image.jpg";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container' >
            <div className='home-bannerImage-container' >
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section" >
                <h1 className="primary-heading" >
                    Fresh and Quality Spices
                </h1>
                <p className="primary-text">
                Spicy food may play a role in promoting heart health.
                Indian spices, such as turmeric, cloves, coriander, and cardamom,
                have potential benefits in improving heart health. You Don't need to wait or 
                travel to get what you want now.
                Let's Go!!!
                </p>
                <button className="secondary-button">
                    Order Now <FiArrowRight />
                </button>

            </div>
            <div className="home-image-container" >
                <img src={BannerImage} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Home