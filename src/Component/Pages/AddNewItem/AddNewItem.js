import React from "react";
import { toast } from "react-toastify";
import "./AddNewItem.css";

const AddNewItem = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const supplierName = event.target.supplierName.value;
    const img = event.target.img.value;
    const sold = event.target.sold.value;
    const description = event.target.description.value;
    const inventory = {
      name,
      price,
      supplierName,
      img,
      sold,
      description,
    };

    fetch("http://localhost:5000/inventory", {
      method: "POST",
      body: JSON.stringify(inventory),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          toast("The product has been added correctly!");
          event.target.reset();
        }
      });
  };

  return (
    <div className="add_new_items_container">
      <form className="add_new_items_form" onSubmit={submitHandler}>
        <h3>Add New Items</h3>
        <div>
          <input type="text" placeholder="Enter title" name="name" />
          <input type="number" placeholder="Enter Price" name="price" />
        </div>
        <div>
          <input type="text" placeholder="Supplier Name" name="supplierName" />
          <input type="number" placeholder="Enter Quantity" name="quantity" />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Image URl" name="img" />
          <input type="text" placeholder="Enter Sell" name="sold" />
        </div>
        <textarea placeholder="description" name="description"></textarea>
        <div>
          <button className="Add-items-btn">Add Now</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
