import React from "react";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  return (
    <div>
      <div className="text-center py-5">
        <Link to="/add-new-item">
          <button className="manage_inventories_btn text-black px-5 py-3">
            Add New Item
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
