import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";
import { link } from "fs";

const Navbar = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );

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
