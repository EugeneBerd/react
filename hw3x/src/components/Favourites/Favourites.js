import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import ItemList from "../ItemList/ItemList";

const Favourites = () => {
  const parse = JSON.parse(localStorage.getItem("favourites")).forEach((s) => {
    console.log(s);
    JSON.parse(localStorage.getItem("store"))
      .filter((e) => e.id !== s)
      .map((x) => console.log(x.id));
  });

  console.log(parse);
  // const parsePrice = JSON.parse(localStorage.getItem("store"))
  //   .filter((e) => e.id !== "2")
  //   .map((x) => <ItemCard fav="x" item={x} key={x.id} />);

  return <div>{parse} ////</div>;
};

export default Favourites;
