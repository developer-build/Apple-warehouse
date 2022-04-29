import React, { useEffect, useState } from "react";
import Inventory from "../inventoryItem/InventoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "./inventoryItems.css";
import { Link } from "react-router-dom";

const InventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  console.log(inventoryItems);

  useEffect(() => {
    fetch("faceData.json")
      .then((res) => res.json())
      .then((data) => setInventoryItems(data));
  }, []);

  return (
    <div className="inventory-items-container">
      <div className="container">
        <h2 className="text-center py-5">Our inventory is phone items</h2>
        <div className="row row-cols-lg-3 row-cols-md-2 g-5">
          {inventoryItems.map((inventory) => (
            <Inventory inventory={inventory} key={inventory._id} />
          ))}
        </div>
        <div className="text-center pb-3 mt-5">
          <Link to="/manage-inventories">
            <button className="manage_inventories_btn">
              Manage Inventories
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
