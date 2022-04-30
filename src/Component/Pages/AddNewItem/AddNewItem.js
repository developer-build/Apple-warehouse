import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../FirebaseInit/FirebaseInit";
import Spinners from "../../Shear/Spinners/Spinners";
import "./AddNewItem.css";

const AddNewItem = () => {
  let [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spinners />;
  }
  const submitHandler = (event) => {
    console.log();
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const price = event.target.price.value;
    const supplierName = event.target.supplierName.value;
    const img = event.target.img.value;
    const sold = event.target.sold.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    const inventory = {
      name,
      price,
      supplierName,
      img,
      sold,
      description,
      email,
      quantity,
    };

    fetch("https://intense-dusk-83706.herokuapp.com/inventory", {
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
          <input required type="text" placeholder="Enter title" name="name" />
          <input
            required
            type="number"
            placeholder="Enter Price"
            name="price"
          />
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Supplier Name"
            name="supplierName"
          />
          <input
            required
            type="number"
            placeholder="Enter Quantity"
            name="quantity"
          />
        </div>
        <div className="mb-3">
          <input required type="text" placeholder="Image URl" name="img" />
          <input required type="text" placeholder="Enter Sell" name="sold" />
        </div>

        <input
          required
          className="mb-4 ms-4"
          type="email"
          value={user.email}
          readOnly
          name="email"
        />

        <textarea placeholder="description" name="description"></textarea>
        <div>
          <button className="Add-items-btn">Add Now</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewItem;
