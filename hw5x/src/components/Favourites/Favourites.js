import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import "./favourites.scss";

const Favourites = () => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav);

  const store = useSelector((state) => state.store);
  // console.log("fav", fav);
  // console.log("store", store);
  // const [fav, setFav] = useState(
  //   JSON.parse(localStorage.getItem("favourites")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("favourites", JSON.stringify(fav));
  // }, []);

  const res = store.filter((item) => fav.includes(item.id));
  const itemsList = res.map((x) => (
    <ItemCard fav={fav} item={x} key={x.id} delFavs={() => delFavs(x.id)} />
  ));

  const delFavs = (favId) => {
    dispatch({ type: "DEL_FAV", payload: favId });
    // localStorage.setItem("favourites", JSON.stringify(fav));
  };

  return <div className="galleryItems">{itemsList}</div>;
};

export default Favourites;
