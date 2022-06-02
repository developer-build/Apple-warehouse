import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageInventories.css";
import deleteIcon from "../../../Assets/Icons/delete.png";
import Spinners from "../../Shear/Spinners/Spinners";
import { useQuery } from "react-query";

const ManageInventories = () => {
  const [reload, setReload] = useState(false);
  const { isLoading, data: inventory } = useQuery(["inventory", reload], () =>
    fetch("https://intense-dusk-83706.herokuapp.com/inventory").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinners />;
  }

  const deleteHandler = (id) => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      const url = `https://intense-dusk-83706.herokuapp.com/my-items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          setReload(!reload);
        });
    }
  };

  return (
    <div className="manage_inventories_container">
      <div className="text-center py-3">
        <Link to="/add-new-item">
          <button className="manage_inventories_btn px-5 py-3">
            Add New Item
          </button>
        </Link>
      </div>
      <div>
        <h2 className="text-center pt-5 pb-2 m-0">Manage all items</h2>
        <div className=" p-4">
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Supplier Name</th>
                <th>Sold</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item?._id}>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.supplierName}</td>
                  <td>{item?.sold}</td>
                  <td className="text-center">
                    <button
                      onClick={() => deleteHandler(item?._id)}
                      className="delete_btn"
                    >
                      <img style={{ width: "30px" }} src={deleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventories;
