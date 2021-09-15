import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./favourites.scss";

const Favourites = () => {
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav));
  }, [fav]);

  const store = JSON.parse(localStorage.getItem("store")),
    res = store.filter((item) => fav.includes(item.id));
  const itemsList = res.map((x) => (
    <ItemCard fav="sss" item={x} key={x.id} delFavs={() => delFavs(x.id)} />
  ));

  const delFavs = (favId) => {
    setFav(
      JSON.parse(localStorage.getItem("favourites")).filter((e) => e !== favId)
    );
    localStorage.setItem("favourites", JSON.stringify(fav));
  };

  return <div className="galleryItems">{itemsList}</div>;
};

export default Favourites;
