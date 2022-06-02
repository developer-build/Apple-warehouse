import React from "react";
import Banner from "../Banner/Banner";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import InventoryItems from "../inventoryItems/InventoryItems";
import OurTeam from "../OurTeam/OurTeam";
import StockItemType from "../StockItemType/StockItemType";
import Suppliers from "../Suppliers/Suppliers.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <StockItemType />
      <Suppliers />
      <HomeBlogs />
      <OurTeam />
    </div>
  );
};

export default Home;
