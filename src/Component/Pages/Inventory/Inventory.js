import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hello</h1>
      <p>{id}</p>
    </div>
  );
};

export default Inventory;
