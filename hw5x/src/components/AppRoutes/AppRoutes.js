import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Favourites from "../Favourites/Favourites";
import CartPage from "../CartPage/CartPage";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/price.json").then((res) => {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("favourites", JSON.stringify(fav));
      dispatch({ type: "SET_STORE", payload: res.data });
    });
  }, [cart, fav, dispatch]);

  return (
    <Switch>
      <Route exact path={"/"}>
        <MainPage />
      </Route>
      <Route exact path={"/cart"}>
        <CartPage />
      </Route>
      <Route exact path={"/favourites"}>
        <Favourites />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
