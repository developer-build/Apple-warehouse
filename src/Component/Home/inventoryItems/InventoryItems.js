import Inventory from "../inventoryItem/InventoryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "./inventoryItems.css";
import { Link } from "react-router-dom";
import Spinners from "../../Shear/Spinners/Spinners";
import { useQuery } from "react-query";

const InventoryItems = () => {
  const { isLoading, data: inventory } = useQuery(["inventory"], () =>
    fetch("https://intense-dusk-83706.herokuapp.com/inventory").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinners />;
  }

  return (
    <div className="inventory-items-container">
      <div className="container">
        <h2 className="text-center py-5">Our inventory items</h2>
        <div className="row row-cols-lg-3 row-cols-md-2 g-5">
          {inventory.slice(0, 6).map((inventoryItem) => (
            <Inventory inventory={inventoryItem} key={inventoryItem._id} />
          ))}
        </div>
        <div className="text-center pb-3 mt-5">
          <Link to="/manage-inventories">
            <button className="manage_inventories_btn">
              Manage Inventories
              <FontAwesomeIcon className="ps-2" icon={faAnglesRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
