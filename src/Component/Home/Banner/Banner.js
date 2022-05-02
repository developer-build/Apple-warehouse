import React from "react";
import "./Banner.css";
import banner from "../../../Assets/Images/banner.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

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
              <div className="mt-5">
                <Link to="/manage-inventories">
                  <button className="manage_inventories_btn">
                    Manage Inventories
                    <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
                  </button>
                </Link>
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
