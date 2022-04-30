import { useEffect, useState } from "react";

const useInventory = (reload) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://intense-dusk-83706.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  return [inventory, setInventory];
};

export default useInventory;
