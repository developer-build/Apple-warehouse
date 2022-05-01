import React from "react";
import Banner from "../Banner/Banner";
import InventoryItems from "../inventoryItems/InventoryItems";
import StockItemType from "../StockItemType/StockItemType";
import Suppliers from "../Suppliers/Suppliers.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <StockItemType />
      <Suppliers />
    </div>
  );
};

export default Home;
