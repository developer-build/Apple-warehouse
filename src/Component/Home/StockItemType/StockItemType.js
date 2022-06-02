import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./stockItemType.css";

const StockItemType = () => {
  return (
    <div className="our-stock-item-type-container">
      <div className="container">
        <div className="row g-5 row-cols-lg-2 justify-content-center  align-items-center">
          <div>
            <div>
              <img
                src="https://i.ibb.co/JnBddVB/Untitled-design-6-removebg-preview.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div>
            <div>
              <h2>What products do we have in our Apple stock warehouse</h2>
              <p>
                We stock all kinds of Apple products. We have stock in iPhone,
                Mac, Danger, Wearables, etc. That's why we can keep Apple
                products in stock
              </p>
              <div className=" pb-3 mt-5">
                <Link to="/manage-inventories">
                  <button className="manage_inventories_btn">
                    Manage Inventories
                    <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockItemType;
