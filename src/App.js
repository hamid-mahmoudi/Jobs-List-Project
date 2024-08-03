import React from "react";
import Header from "./Components/Header";
import "./App.css"
import Footer from "./Components/Footer";
import Jobs from "./Components/Jobs";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
      <div className="container-fluid">
        <Header />
        <Jobs/>
        <Outlet />
      </div>
  );
};

export default App;
