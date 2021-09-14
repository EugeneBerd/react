import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Cart from "../Cart/Cart";
import Favourites from "../Favourites/Favourites";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <MainPage />
      </Route>
      <Route exact path={"/cart"}>
        <Cart />
      </Route>
      <Route exact path={"/favourites"}>
        <Favourites />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
