import React from "react";
import "./inventoryItem.css";

const InventoryItem = ({ inventory }) => {
  const { name, img, price, quantity, supplierName, description } = inventory;

  return (
    <div>
      <div className="inventory">
        <div className="mt-2">
          <img src={img} alt="" />
        </div>
        <div className="inventory-text">
          <h3>{name}</h3>
          <p>{description}</p>
          <h5>${price}</h5>
          <h6>Quantity: {quantity}</h6>
          <h6>Supplier Name: {supplierName}</h6>
        </div>
        <button className="inventory-btn">Stock Update</button>
      </div>
    </div>
  );
};

export default InventoryItem;
