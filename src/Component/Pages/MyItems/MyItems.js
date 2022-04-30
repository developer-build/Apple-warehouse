import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit/FirebaseInit";
import Spinners from "../../Shear/Spinners/Spinners";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [reload, setReload] = useState(false);
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://intense-dusk-83706.herokuapp.com/my-items?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user, reload]);

  // items delete handler code start here

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
    <div className="bg-black">
      <h2 className="text-center py-5">Your product items</h2>
      <div className="container mx-auto">
        <div className="row row-cols-md-2 ">
          {items.map((item) => (
            <MyItem
              myItems={item}
              deleteHandler={deleteHandler}
              key={item?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
