import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";

const Navbar = () => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );

  return (
    <div className="app__navbar">
      <h1 className="app__navbar__title">
        <a href="/">e-Commerece</a>
      </h1>
      <a href="/cart" style={{ display: "block", paddingTop: "15px" }}>
        <i className="app__navbar__icon">
          {carrito !== null && carrito.length}
          <FaShoppingCart size={30} />
        </i>
      </a>
    </div>
  );
};

export default Navbar;
