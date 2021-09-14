import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <NavLink className="nav-link" exact to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-link"
          exact
          to="/favourites"
          activeClassName="selected"
        >
          Favourites
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-link"
          exact
          to="/cart"
          activeClassName="selected"
        >
          Cart
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
