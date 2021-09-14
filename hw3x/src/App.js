import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./components/Cart/Cart";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App-header">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
