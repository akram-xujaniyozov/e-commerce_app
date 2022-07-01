import React from "react";
import { Link } from "react-router-dom";

import Category from "./Category";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container d-flex">
          <Link to={"/"} className="navbar-brand h1 fw-bold flex-grow-1">
            e-Commerce
          </Link>
          <Search />
          <Category />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
