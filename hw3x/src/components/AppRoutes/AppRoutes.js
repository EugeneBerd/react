import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Favourites from "../Favourites/Favourites";
import CartPage from "../CartPage/CartPage";

const AppRoutes = () => {
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
