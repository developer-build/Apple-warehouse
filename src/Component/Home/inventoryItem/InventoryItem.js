import React from "react";
import { Link } from "react-router-dom";
import "./inventoryItem.css";

const InventoryItem = ({ inventory }) => {
  const { name, img, price, quantity, supplierName, description, _id } =
    inventory;

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
        <Link to={`/inventory/${_id}`}>
          <button className="inventory-btn">Stock Update</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryItem;
