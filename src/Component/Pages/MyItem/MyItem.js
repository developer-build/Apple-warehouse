import React from "react";
import "./MyItem.css";
import cancelImage from "../../../Assets/Icons/cancel.png";

const MyItem = ({ myItems, deleteHandler }) => {
  const { name, img, price, _id, supplierName, quantity, description } =
    myItems;

  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <h6>${price}</h6>
              <h6>Supplier Name: {supplierName}</h6>
              <h6> Quantity: {quantity}</h6>
            </div>
            <button onClick={() => deleteHandler(_id)} className="myItems-btn">
              Cancel
              <img
                style={{ width: "35px", paddingLeft: "10px" }}
                src={cancelImage}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
