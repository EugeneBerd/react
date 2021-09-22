import "./App.css";
import React from "react";
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
