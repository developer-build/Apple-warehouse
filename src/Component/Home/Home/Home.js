import React from "react";
import Banner from "../Banner/Banner";
import InventoryItems from "../inventoryItems/InventoryItems";
import Suppliers from "../Suppliers/Suppliers.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <Suppliers />
    </div>
  );
};

export default Home;
