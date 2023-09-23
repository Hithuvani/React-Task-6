import React from 'react';
import Spices from "../assests/Spices.jpg";
import ChooseSpice from "../assests/choose-spice.jpg";
import DeliverySpice from "../assests/delivery-spice.jpg";


const Work = () => {
    const workInfoData = [
        {
            image: Spices,
            Title: "Peppercons",
            text: "Increase spicy to your food",
        },
        {
            image: ChooseSpice,
            Title: "Star Anise",
            text: "Good Food, Good Life",
        },
        {
            image: DeliverySpice,
            Title: "Licorice",
            text: "Add spice, Boost your Life",
        },
    ];
  return <div className="work-section-wrapper" >
        <div className="work-section-top">
            <p className="primary-subheading" >Products</p>
            <h1 className="primary-heading">Products You'll Need</h1>
            <p className="primary-text">
            Spices help increase oxygenation and circulation in the body,
            as well as helping boost the immune system.
            Spices are important in both cooking and medicine. They improve
            the natural flavor of cuisines and can be used to adjust the appearance
            of food and make it more pleasing in color.
            </p>
          <div className="work-section-bottom" >
            {
                workInfoData.map((data) => (
                    <div className="work-section-info" >
                        <div className="Info-boxes-img-container" >
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.Title}</h2>
                        <p>{data.text}</p>
                    </div>
                        
                ) )          

               
            }

          </div>

        </div>
    
  </div>
  
}

export default Work