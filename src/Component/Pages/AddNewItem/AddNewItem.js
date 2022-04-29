import React from "react";
import "./AddNewItem.css";

const AddNewItem = () => {
  return (
    <div className="add_new_items_container">
      <form className="add_new_items_form">
        <h3>Add New Items</h3>
        <div>
          <input type="text" placeholder="Enter title" name="title" />
          <input type="number" placeholder="Enter Price" name="price" />
        </div>
        <div>
          <input type="text" placeholder="Supplier Name" name="supplierName:" />
          <input type="number" placeholder="Enter Quantity" name="quantity" />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Images URl" name="img" />
          <input type="text" placeholder="Enter Sell" name="sell" />
        </div>
        <textarea placeholder="description"></textarea>
        <div>
          <button className="Add-items-btn">Add Now</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
