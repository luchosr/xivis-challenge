import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";
import { useCart } from "./cart/hooks";

const Navbar = () => {
  const carrito = useCart();

  return (
    <div className="app__navbar">
      <Link to="/">
        <h1 className="app__navbar__title">e-Commerce</h1>
      </Link>

      <Link to="/cart">
        <i className="app__navbar__icon">
          {carrito !== null && carrito.length}
          <FaShoppingCart size={30} />
        </i>
      </Link>
    </div>
  );
};

export default Navbar;
