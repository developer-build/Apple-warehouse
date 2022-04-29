import React from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();

  return (
    <div>
      <div className="add_quantity-container">
        <h3>Increase the quantity of the product</h3>
        <form>
          <input
            type="number"
            placeholder="Enter quantity number"
            name="quantity"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
