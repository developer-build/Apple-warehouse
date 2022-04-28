import React, { useEffect, useState } from "react";
import Inventory from "../inventory/Inventory";

import "./inventoryItems.css";

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
      </div>
    </div>
  );
};

export default InventoryItems;
