import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import { Home, OneProduct } from "./pages";

import "./App.css";

const App = () => {
  const { id } = useSelector(({ getID }) => getID);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path={`/product/:id`} element={<OneProduct />} />
      </Routes>
    </div>
  );
};

export default App;
