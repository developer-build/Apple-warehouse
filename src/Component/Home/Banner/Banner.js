import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="container g-3 row row-cols-md-2 justify-content-center  align-items-center">
          <div>
            <div className="banner-text">
              <h1>
                You are welcome
                <br />
                Apple Stock Warehouse
              </h1>
              <p>
                If you can warehouse your product. But you're coming to the
                right place. We are working with twenty brand
              </p>
              <div>
                <button>Stock Up Now</button>
              </div>
            </div>
          </div>
          <div>
            <img className="img-fluid" src={banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
