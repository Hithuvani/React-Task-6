import React from 'react';
import AboutBackground from "../assests/about-background.jpeg";
import AboutBackgroundImage from "../assests/about-background-image.jpeg";
// import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container" >
        <div className="about-background-image-container">
            <img src = {AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
            Add a little spice to your life.
                        </h1>
            <p className="primary-text">
            Seriously, this is a handpicked taste!!!. Where every flavor tells a story. For the love of delicious food.
            Your culinary adventure awaits. Low cost. High quality. 
            We are always here to serve you. Life is short, make it sweet. A taste you'll remember.
            </p>
            <p className="primary-text">
            A spice is a non-sugar form of a seed, fruit, root, bark, or other plant substance primarily 
            used for flavoring or coloring food. Spices are distinguished from herbs, which are the leaves, 
            flowers, or stems of plants used for flavoring or as a garnish.
            </p>
            <div className="about-button-container" >
                <button className="secondary-button">Learn More</button>               

            </div>
        </div>
        
    </div>
  );
};

export default About;