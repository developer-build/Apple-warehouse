import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
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
