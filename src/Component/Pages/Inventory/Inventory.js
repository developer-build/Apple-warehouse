import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryItem(data));
  }, [id]);

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
      <div className="container">
        <div className="card my-5 p-2 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={inventoryItem?.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body inventory-card-text">
                <h4 className="card-title">{inventoryItem?.name}</h4>
                <p className="card-text">{inventoryItem?.description}</p>
                <h6 className="">
                  Price:{" "}
                  <span className="fw-bold fs-5" style={{ color: "#FE8033" }}>
                    ${inventoryItem?.price}
                  </span>
                </h6>
                <h6>Quantity: {inventoryItem?.quantity}</h6>
                <h6>Sold: {inventoryItem?.sold}</h6>
                <h6>Supplier Name: {inventoryItem?.supplierName}</h6>

                <button>Delivered</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-3 mt-5">
        <Link to="/manage-inventories">
          <button className="manage_inventories_btn text-black">
            Manage Inventories
            <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
