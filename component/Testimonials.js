import React from 'react';
import SpiceCardamom from "../assests/who.png";
import {AiFillStar} from "react-icons/ai";

const Testimonials = () => {
  return (
  <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading" >Testimonial</p>
        <h1 className="primary-heading" >Your Comments</h1>
        <p className="primary-text" >
        Spices have immense health benefits and are usually considered to be 
        safe for regular consumption without the risk of severe reactions. Add your thoughts here for best.
        </p>
    </div>
    <div className="testimonial-section-bottom">
        <img src={SpiceCardamom} alt="" />
        <p>
        We Tried 7 Brands of world's popular countries — And the Winner Is Not What You Think!!!
        </p>
        <div className="testimonials-stars-container" >
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>World Health Organisation</h2>
    </div>
    
  </div>
  );
};

export default Testimonials