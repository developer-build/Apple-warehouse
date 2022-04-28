import React from "react";
import "./Banner.css";
import banner2 from "../../../Assets/Images/Untitled design.png";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="container g-3 row row-cols-md-2 justify-content-center  align-items-center">
          <div>
            <div className="banner-text">
              <h1>
                Warehouse I Phone
                <br />
                8GB 4G Black
              </h1>
              <p>
                Buy 1 Warehouse phone, get 1 Warehouse mobile SIM card for FREE
                Offer ends 02/08/2022
              </p>
              <div>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
          <div>
            <img className="img-fluid" src={banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
